import React from 'react';
import { shallow } from 'enzyme';

import Home from '@/pages/Home';

describe('Home - unit', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });

});
