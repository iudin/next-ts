import * as React from 'react';
import App, { Container } from 'next/app';
import {
  ThemeProvider,
  ThemeProviderProps,
  createGlobalStyle
} from 'styled-components';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../src/store';

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

type IProps = ThemeProviderProps<ITheme> & { store: any };

class Root extends App<IProps> {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    };
  }
  public render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <>
              <Component {...pageProps} />
              <Fonts />
            </>
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initStore)(Root);
