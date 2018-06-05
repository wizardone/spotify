import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import Login from '../components/Login';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
});

it('displays the login form', () => {
  const login = enzyme.shallow(<Login />);
  expect(login.find('a.login').text()).toEqual('Spotify Login');
});

