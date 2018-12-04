require('dotenv').config();
const lru = require('lru-cache');
import * as express from 'express';
import * as next from 'next';

import logger from '../lib/log';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const ssrCache = new lru({
  max: parseInt(process.env.SSR_CACHE_MAX, 10) || 100,
  maxAge: parseInt(process.env.SSR_CACHE_MAX_AGE, 10) || 60000
});

const getCacheKey = req => `${req.url}`;
async function renderAndCache(
  req: express.Request,
  res: express.Response,
  pagePath: string,
  queryParams?: any
) {
  const key = getCacheKey(req);
  if (ssrCache.has(key)) {
    logger.log('Got cached page', key);
    res.setHeader('x-cache', 'HIT');
    res.send(ssrCache.get(key));
    return;
  }
  try {
    const html = await app.renderToHTML(req, res, pagePath, queryParams);
    if (res.statusCode !== 200) {
      res.send(html);
      return;
    }
    logger.log('Got page from server', key);
    ssrCache.set(key, html);
    res.setHeader('x-cache', 'MISS');
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams);
  }
}

app.prepare().then(() => {
  const server = express();
  server.use('/static', express.static(__dirname + '/static'));
  server.get('/', (req, res) => renderAndCache(req, res, '/'));
  server.get('/posts/:id', (req, res) =>
    renderAndCache(req, res, '/posts', { id: req.params.id })
  );
  server.get('*', (req, res) => handle(req, res));
  server.listen(port, err => {
    if (err) throw err;
    logger.log(`> Ready on http://localhost:${port}`);
  });
});
