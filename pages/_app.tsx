import * as React from 'react';
import App, { Container } from 'next/app';
import {
  ThemeProvider,
  ThemeProviderProps,
  createGlobalStyle
} from 'styled-components';

import theme, { ITheme } from '../src/theme';
import { getFontFace } from 'Utils/helpers';

const Fonts = createGlobalStyle`
  ${getFontFace('AvenirNextCyr', 'AvenirNextCyr-Regular')}
  ${getFontFace('AvenirNextCyr', 'subset-AvenirNextCyr-Italic', 400, 'italic')}
  ${getFontFace('AvenirNextCyr', 'AvenirNextCyr-Medium', 500)}
  ${getFontFace('AvenirNextCyr', 'AvenirNextCyr-Demi', 600)}
  ${getFontFace('AvenirNextCyr', 'AvenirNextCyr-Bold', 700)}
  ${getFontFace('AvenirNextCyr', 'AvenirNextCyr-Heavy', 900)}
  ${getFontFace('als_rublregular', 'rouble-webfont')}
  ${getFontFace('icomoon', 'icomoon')}
  body {
    font-family: AvenirNextCyr, sans-serif;
  }
  [class^="icon-"], [class*=" icon-"] {
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-arr:before {
    content: "\e900";
  }
  .rubl {
    font-family: als_rublregular;
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
