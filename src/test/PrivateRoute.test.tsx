import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { BrowserRouter, Redirect } from 'react-router-dom';
import Auth from '../auth';
import PrivateRoute from '../components/PrivateRoute';

describe('PrivateRoute', () => {
  let Dummy, privateRoute;

  beforeEach(() => {
    Dummy = () => <div>Dummy component</div>;
    privateRoute = shallow(<BrowserRouter><PrivateRoute component={Dummy} path='/dummy'/></BrowserRouter>);
  });

  it('passes the authentication check and renders the component', () => {
    Auth.getToken = jest.fn(() => 'aaaa');

    expect(privateRoute.html()).toEqual('<div>Dummy component</div>');
  });

  it('does not pass the authentication check and redirects', () => {
    Auth.getToken = jest.fn(() => null);

    expect(privateRoute.html()).toEqual('');
  });
});
