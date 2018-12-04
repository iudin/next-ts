import React, { Component } from 'react';
import styled from '../src/styled-components';

import logger from 'Lib/log';

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
    return (
      <div>
        <Title>My blog post #{this.props.postId}</Title>
        <Img src="/static/img/kari-logo.svg" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    );
  }
}
