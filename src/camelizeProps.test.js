import React from 'react';
import { shallow } from 'enzyme';

import camelizeProps from './camelizeProps';

const props = { first_name: 'Joe', last_name: 'Doe' };

describe('camelizeProps', () => {
  it('returns a new components with all props in camelcase', () => {
    const Profile = camelizeProps(({ firstName, lastName }) => (
      <div>{firstName} {lastName}</div>
    ));
    const wrapper = shallow(<Profile {...props} />);

    expect(wrapper.props()).toEqual({ firstName: 'Joe', lastName: 'Doe' });
  });
});
