import * as React from 'react';
import styled from '../../styled-components';

const Data = styled.div`
  margin: 20px 0;
  p {
    color: ${props => props.theme.textColor};
  }
`;

interface IProps {
  data?: string;
}

export default ({ data }: IProps) => (
  <Data>
    <p>{data ? data : 'No data!'}</p>
  </Data>
);
