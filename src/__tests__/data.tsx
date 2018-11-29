import * as React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Data from '../components/data';

describe('data component', () => {
  const component = shallow(<Data data={undefined} />);
  it('renders properly', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
  it('renders empty data message when no data provided', () => {
    expect(component.find('styled.p').text()).toEqual('No data!');
  });
});
