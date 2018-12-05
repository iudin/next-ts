import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from '../src/styled-components';

const ErrorWrapper = styled.div`
  .not-found {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1020px;
    min-height: calc(100vh - 346px);
    margin: 0 auto;
    padding: 50px 0;
    & > div {
      min-width: 360px;
      width: 50%;
      margin-top: -50px;
    }
    .img-404 {
      padding: 0 50px;
    }
    .text-404 {
      padding: 50px 50px 0;
      text-align: center;
      h2 {
        line-height: 284px;
        font-size: 220px;
        color: ${props => props.theme.paleColor};
      }
      p {
        max-width: 430px;
        margin: -50px auto 50px;
        padding: 0;
      }
    }
  }
  @media screen and (min-width: 992px) and (max-width: 1023px) {
    .not-found {
      min-height: calc(100vh - 357px);
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    .not-found {
      min-height: calc(100vh - 357px);
      padding: 30px 0;
      .text-404 {
        h2 {
          line-height: 220px;
          font-size: 160px;
        }
        p {
          margin: -40px auto 30px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .not-found {
      min-height: calc(100vh - 107px);
      padding: 10px 0;
      & > div {
        margin-top: 0;
      }
      .text-404 {
        padding: 0 50px 10px;
        h2 {
          line-height: 140px;
          font-size: 120px;
        }
        p {
          margin: -10px auto 20px;
        }
      }
    }
  }
`;

export default class Error extends React.Component<{ statusCode: number }> {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }
  render() {
    const { statusCode } = this.props;
    return (
      <ErrorWrapper>
        <Head>
          <title>
            {statusCode && statusCode !== 404
              ? `${statusCode} - Ошибка`
              : '404 - Страница не найдена'}
          </title>
        </Head>
        <section className="not-found">
          <div className="img-404">
            <img src="/static/img/404.svg" alt="" />
          </div>
          <div className="text-404">
            <h2>{statusCode && statusCode !== 404 ? statusCode : '404'}</h2>
            <p>
              {statusCode && statusCode !== 404
                ? 'Произошла ошибка'
                : `
                  Похоже вы заблудились... Страница, которую вы ищете, не
                  сущестувует, либо неправильно набран адрес
                `}
            </p>
            <Link href="/">
              <a className="link-dotted">вернуться на главную</a>
            </Link>
          </div>
        </section>
      </ErrorWrapper>
    );
  }
}
