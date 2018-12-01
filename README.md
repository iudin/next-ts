# Next SSR Project

## Features

- [x] typescript;
- [x] test with jest;
- [x] ssr with custom express server;
- [x] ssr caching with LRU-cache;
- [x] styles with styled-components both on server and client;
- [x] custom theme (styled-components);
- [x] env variables;
- [x] semver;

- [ ] redux store;
- [ ] custom root path;
- [ ] docker build;
- [ ] logger;
- [ ] head elements;
- [ ] shallow routing.

## Install

```bash
yarn
```

## Run

### Tests

```bash
yarn test # test
yarn test:watch
yarn test:coverage # test with coverage report
```

### Development

```bash
yarn dev
```

### Production

```bash
yarn build # create .next directory
yarn start # start server
yarn docker # build docker image with new version num
```
