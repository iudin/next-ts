import * as React from 'react';
import styled from '../../styled-components';

const DataText = styled.p`
  color: ${props => props.theme.textColor};
`;

interface IProps {
  data?: string;
}

const Data = ({ data }: IProps) => (
  <DataText>{data ? data : 'No data!'}</DataText>
);

export default Data;
