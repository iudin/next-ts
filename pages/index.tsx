import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from '../src/styled-components';

import Data from 'Components/data';

const Nav = styled.ul`
  margin: 0 0 20px;
  padding: 0;
  list-style: none;
  li {
    display: inline-block;
    a {
      padding: 4px 20px;
      color: ${props => props.theme.primaryColor};
      cursor: pointer;
      &:hover {
        color: ${props => props.theme.secondaryColor};
      }
    }
  }
`;
const Img = styled.img`
  max-width: 100px;
`;

export default () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Nav>
      <li>
        <Link href={{ pathname: '/posts', query: { id: '2' } }} as="/posts/2">
          <a>post #2</a>
        </Link>
      </li>
      <li>
        <Link href="/articles">
          <a>test</a>
        </Link>
      </li>
    </Nav>
    <Img src="/static/img/kari-logo.svg" alt="" />
    <Data />
    <p>
      <em>{process.env.TEST_VAR}</em>
    </p>
    <p>
      <strong>Test text with font weight style...</strong>
    </p>
    <p>
      <strong>
        <em>Test text with font weight style...</em>
      </strong>
      <span className="icon-arr" />
    </p>
    <p style={{ fontWeight: 400 }}>Test text with font weight style...</p>
    <p style={{ fontWeight: 500 }}>Test text with font weight style...</p>
    <p style={{ fontWeight: 600 }}>Test text with font weight style...</p>
    <p style={{ fontWeight: 700 }}>Test text with font weight style...</p>
    <p style={{ fontWeight: 900 }}>Test text with font weight style...</p>
    <p className="rubl">a</p>
  </>
);
