import * as React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider, ThemeProviderProps } from 'styled-components';

import theme, { ITheme } from '../src/theme';

export default class Root extends App<ThemeProviderProps<ITheme>> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}
