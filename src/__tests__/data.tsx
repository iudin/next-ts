import * as React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Data from '../components/data';

describe('data component', () => {
  const component = shallow(<Data data={undefined} />);
  const testData = 'Test data';
  const componentWithData = shallow(<Data data={testData} />);
  it('renders properly', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
  it('renders empty data message when no data provided', () => {
    expect(component.find('p').text()).toEqual('No data!');
  });
  it('renders data message when data prop provided', () => {
    expect(componentWithData.find('p').text()).toEqual(testData);
  });
});
