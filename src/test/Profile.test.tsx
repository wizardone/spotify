import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import { Profile } from '../components/Profile';

describe('<Profile />', () => {
  let props = {
    userData: {
      email: 'test@test.com',
      display_name: 'display',
      id: '5',
      type: 'user',
    }
  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Profile {...props}/>, div);
  });

  it('displays the user information', () => {
    const wrapper = enzyme.shallow(<Profile {...props}/>)

    expect(wrapper.find('p.email').text()).toEqual(`Email: ${props.userData.email}`);
  });
});
