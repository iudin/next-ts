import * as React from 'react';
import { shallow } from 'enzyme';

import Data from '../components/data';

describe('Data component', () => {
  it('renders empty data message when no data provided', () => {
    const component = shallow(<Data data={undefined} />);
    expect(component.find('.data').text()).toEqual('No data!');
  });
});
