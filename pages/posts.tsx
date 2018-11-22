import React, { Component } from 'react';

export default class extends Component<{ postId: string }> {
  static getInitialProps({ query: { id } }) {
    return { postId: id };
  }
  render() {
    console.log('C', this.props.postId);
    return (
      <div>
        <h1>My blog post #{this.props.postId}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    );
  }
}
