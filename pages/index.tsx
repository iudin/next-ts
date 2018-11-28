import * as React from 'react';
import styled from '../src/styled-components';
import Link from 'next/link';

import Data from '../src/components/data';

const Nav = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const NavItem = styled.li`
  display: inline-block;
`;
const NavLink = styled.a`
  padding: 4px 20px;
  color: ${props => props.theme.primaryColor};
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.secondaryColor};
  }
`;

export default () => (
  <>
    <Nav>
      <NavItem>
        <Link href="/a">
          <NavLink>a</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/b">
          <NavLink>b</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href={{ pathname: '/posts', query: { id: '2' } }} as="/posts/2">
          <NavLink>post #2</NavLink>
        </Link>
      </NavItem>
    </Nav>
    <Data />
    <p>{process.env.TEST_VAR}</p>
  </>
);
