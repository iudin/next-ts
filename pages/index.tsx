import * as React from 'react';
import styled from '../src/styled-components';
import Link from 'next/link';

import Data from 'Components/data';

const Nav = styled.ul`
  margin: 0;
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
    <Nav>
      <li>
        <Link href="/a">
          <a>a</a>
        </Link>
      </li>
      <li>
        <Link href="/b">
          <a>b</a>
        </Link>
      </li>
      <li>
        <Link href={{ pathname: '/posts', query: { id: '2' } }} as="/posts/2">
          <a>post #2</a>
        </Link>
      </li>
    </Nav>
    <Img src="Static/img/kari-logo.svg" alt="" />
    <Data />
    <p>{process.env.TEST_VAR}</p>
  </>
);
