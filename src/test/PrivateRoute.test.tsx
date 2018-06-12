import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { MemoryRouter, Redirect } from 'react-router-dom';
import Auth from '../auth';
import PrivateRoute from '../components/PrivateRoute';

describe('PrivateRoute', () => {
  let Dummy;

  beforeEach(() => {
    Dummy = () => <div>Dummy component</div>;
  });

  it('passes the authentication check and renders the component without a guard function', () => {
    Auth.getToken = jest.fn(() => 'aaaa');
    const privateRoute = shallow(<MemoryRouter><PrivateRoute component={Dummy} path='/dummy'/></MemoryRouter>);

    expect(privateRoute.html()).toEqual('<div>Dummy component</div>');
  });

  it('passes the authentication check and renders the component with a guard function', () => {
    Auth.getToken = jest.fn(() => 'my_sweet_token');
    const privateRoute = shallow(<MemoryRouter><PrivateRoute component={Dummy} path='/dummy' guardFunc={Auth.getToken} /></MemoryRouter>);

    expect(privateRoute.html()).toEqual('<div>Dummy component</div>');
  });

  it('does not pass the authentication check and redirects', () => {
    Auth.getToken = jest.fn(() => null);
    const privateRoute = shallow(<MemoryRouter><PrivateRoute component={Dummy} path='/dummy' guardFunc={Auth.getToken} /></MemoryRouter>);

    expect(privateRoute.html()).toEqual('');
  });
});
