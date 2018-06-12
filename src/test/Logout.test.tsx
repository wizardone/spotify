import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import { MemoryRouter, Redirect } from 'react-router-dom';
import Logout from '../components/Logout';
import Auth from '../auth';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Logout /></MemoryRouter>, div);
});

it('redirects to the home screen', () => {
  Auth.deleteToken = jest.fn();
  const logout = enzyme.shallow(<Logout />);
  logout.setState({redirectHome: true})

  expect(logout.find(Redirect)).toHaveLength(1);
});
