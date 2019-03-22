# Next SSR Project

## Features

- [x] typescript;
- [x] test with jest;
- [x] ssr with custom express server;
- [x] ssr caching with LRU-cache;
- [x] server hot reload (nodemon);
- [x] styles with styled-components both on server and client;
- [x] custom theme (styled-components);
- [x] env variables;
- [x] semver;
- [x] webpack aliases;
- [x] using functions and interfaces from other microservices;
- [x] logger;
- [x] head elements;
- [x] custom error page;
- [x] redux store;
- [x] fetching data from server side;

- [ ] custom root path;
- [ ] nested routing;
- [ ] docker build (multistage?);
- [ ] SEO analytics (with-google-analytics, with-react-ga examples);
- [ ] icons (as font or svg or base64);
- [ ] static export;
- [ ] shallow routing;
- [ ] prefetching pages.

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
yarn docker # build docker image with new version num (major.minor.patch)
```

## Webpack Aliases

`next.config.js`:

```
config.resolve.alias = {
  Components: path.resolve(__dirname, 'src/components/')
};
```

`tsconfig.json`:

```
"paths": {
  "Components/*": ["./src/components/*"]
},
```

`jest.config.js`:

```
moduleNameMapper: {
  '^Components/(.*)': '<rootDir>/src/components/$1'
},
```

Source: [link](https://medium.com/@martin_hotell/type-safe-es2015-module-import-path-aliasing-with-webpack-typescript-and-jest-fe461347e010)

## Fetching data on server side with Redux

Need `next-redux-wrapper` package.

`_app.tsx`:

```
export default withRedux(initStore)(RootComponent);
```

Function `initStore` need to take `initialState` as parameter:

```
export const initStore = (initialState = {}) =>
  createStore<IState, AnyAction, {}, {}>(reducer, initialState, enhancer);
```

## Migration Kari

1. Theme (styled-components) must contain all project colors and other css params
   (like media-queries params, default margins, paddings, borders, transitions, shadows etc.).
2. Need separate directory for universal styled components.
3. Constants in Store entities migrate to enums in i.ts files.
