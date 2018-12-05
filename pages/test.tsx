import React, { Component } from 'react';
import Head from 'next/head';
import styled from '../src/styled-components';

import logger from 'Lib/log';

import { connect } from 'react-redux';

import { IState } from 'Store/i';
import { getArticlesList } from 'Store/articles/actions';
import { IArticlesState, IArticlesActions } from 'Store/articles/i';

const Title = styled.h1`
  color: ${props => props.theme.primaryColor};
`;

type IProps = IArticlesState & IArticlesActions;

const pageSize = 8;

class Test extends Component<IProps> {
  static async getInitialProps(props) {
    logger.log('TEST begin loading', props.data);
    await props.getArticlesList!({
      tags: JSON.stringify(['articles']),
      size: pageSize
    });
    logger.log('TEST data loaded', props.data);
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        <Head>
          <title>{data.length} articles loaded</title>
        </Head>
        <Title>Test page with articles preload</Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
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
