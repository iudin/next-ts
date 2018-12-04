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
- [x] webpack aliases;
- [x] redux store;
- [x] using functions and interfaces from other microservices;

- [ ] custom root path;
- [ ] nested routing;
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
