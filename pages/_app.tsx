import * as React from 'react';
import App, { Container } from 'next/app';
import {
  ThemeProvider,
  ThemeProviderProps,
  createGlobalStyle
} from 'styled-components';

import theme, { ITheme } from '../src/theme';
import { getFontFace } from '../src/utils/helpers';

const Fonts = createGlobalStyle`
  ${getFontFace('AvenirNextCyr', 'AvenirNextCyr-Regular')}
  ${getFontFace('AvenirNextCyr', 'AvenirNextCyr-Italic', 'italic')}
  body {
    font-family: AvenirNextCyr;
  }
`;

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
          <>
            <Component {...pageProps} />
            <Fonts />
          </>
        </ThemeProvider>
      </Container>
    );
  }
}
