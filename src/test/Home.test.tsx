import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import Home from '../components/Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});

it('displays the login form', () => {
  const home = enzyme.shallow(<Home />);
  expect(home.find('div').text()).toEqual('Welcome!');
});
