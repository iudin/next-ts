import React, { Component } from 'react';
import Head from 'next/head';
import styled from '../src/styled-components';

import logger from 'Lib/log';

import { connect } from 'react-redux';

import { IState } from 'Store/i';
import { getArticlesList } from 'Store/articles/actions';
import {
  IArticlesState,
  IArticlesActions,
  ActionTypes as ArticlesAT
} from 'Store/articles/i';
import { requestCreator } from 'Store/request-creator';
import { RequestType, API_ECOMMERCE } from '../src/constants';

import ArticlesWrapper from 'Components/articles/style';

const Title = styled.h1`
  color: ${props => props.theme.primaryColor};
`;

type IProps = IArticlesState & IArticlesActions;

const pageSize = 8;

class Test extends Component<IProps> {
  static async getInitialProps({ store, isServer, pathname, query }) {
    logger.log('TEST begin loading:', isServer, pathname, query);
    const result = await requestCreator(store.dispatch, {
      type: ArticlesAT.GET_ARTICLES_LIST,
      requestUrl: `${API_ECOMMERCE}/article`,
      requestType: RequestType.GET,
      sendParams: {
        tags: JSON.stringify(['articles']),
        size: pageSize
      },
      other: {
        tags: JSON.stringify(['articles']),
        size: pageSize
      }
    });
    const data = result.articles || [];
    logger.log('TEST data loaded:', data.length);
    return { data };
  }
  render() {
    const { data } = this.props;
    return (
      <>
        <Head>
          <title>{data.length} articles loaded</title>
        </Head>
        <Title>Test page with loading articles on server side</Title>
        <p>{data.length} articles loaded</p>
        <ArticlesWrapper>
          <h1>Статьи и обзоры</h1>
          <div className="wrapper-sm articles">
            {data.length > 0 ? (
              <div className="arts">
                {data.map(item => (
                  <div className="arts_item" key={item.articleId}>
                    <div className="arts_img">
                      <img src={item.photos[0]} alt={item.header} />
                    </div>
                    <div className="arts_title">{item.header}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p>Нет обзоров!</p>
            )}
          </div>
        </ArticlesWrapper>
      </>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  ...state.articles
});
const mapDispatchToProps = {
  getArticlesList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test as any);
