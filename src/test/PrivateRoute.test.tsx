import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import PrivateRoute from '../components/PrivateRoute';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const privateRoute = enzyme.shallow(<PrivateRoute>);
});
