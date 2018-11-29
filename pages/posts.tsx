import React, { Component } from 'react';
import styled from '../src/styled-components';

const Title = styled.h1`
  color: ${props => props.theme.primaryColor};
`;

export default class extends Component<{ postId: string }> {
  static getInitialProps({ query: { id } }) {
    console.log('C', id);
    return { postId: id };
  }
  render() {
    console.log('C', this.props.postId);
    return (
      <div>
        <Title>My blog post #{this.props.postId}</Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    );
  }
}
