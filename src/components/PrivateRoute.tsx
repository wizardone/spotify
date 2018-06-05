import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../Auth';

interface PrivateRouteParams {
  component: any;
  path: string;
  redirectTo?: string;
}

const PrivateRoute = ({component: Component, path, ...rest}: PrivateRouteParams) => (
  <Route 
    {...rest} 
    render={props =>
      Auth.getToken() === null ? <Redirect to={rest.redirectTo || '/login'}/> : <Component {...props} />
    }
  />
);

export default PrivateRoute;
