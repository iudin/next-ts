import React, { Component } from 'react';
import Head from 'next/head';
import styled from '../src/styled-components';

import logger from 'Lib/log';

import Articles from 'Components/articles';

const Title = styled.h1`
  color: ${props => props.theme.primaryColor};
`;
const Img = styled.img`
  max-width: 100px;
`;

export default class extends Component<{ postId: string }> {
  static getInitialProps({ query: { id } }) {
    logger.log('C', id);
    return { postId: id };
  }
  render() {
    const { postId } = this.props;
    return (
      <div>
        <Head>
          <title>Post {postId}</title>
        </Head>
        <Title>My blog post #{postId}</Title>
        <Img src="/static/img/kari-logo.svg" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Articles />
      </div>
    );
  }
}
