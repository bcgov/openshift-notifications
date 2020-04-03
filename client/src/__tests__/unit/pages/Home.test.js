import React from 'react';
import { shallow } from 'enzyme';

import Home from '@/pages/Home';

jest.mock('@apollo/react-hooks', () => ({
  useQuery: () => ({
    loading: false,
    error: null,
    data: {
      getPosts: [
        { id: 1, message: 'Foo' },
        { id: 1, message: 'Bar' },
      ],
    }
  }),
}));

describe('Home - unit', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });

});
