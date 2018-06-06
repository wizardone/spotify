import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../auth';

interface PrivateRouteParams {
  component: any;
  path: string;
  redirectTo?: string;
  guardFunc?: () => any;
}

const PrivateRoute = ({component: Component, path, guardFunc, ...rest}: PrivateRouteParams) => (
  <Route 
    {...rest} 
    render={props =>
      guardFunc && guardFunc() === null ? <Redirect to={rest.redirectTo || '/login'}/> : <Component {...props} />
    }
  />
);

export default PrivateRoute;
