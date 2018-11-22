import * as React from 'react';
import './index.scss';

interface IProps {
  data?: string;
}

const Data = ({ data }: IProps) => (
  <p className="data">{data ? data : 'No data!'}</p>
);

export default Data;
