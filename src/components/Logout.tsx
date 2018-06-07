import * as React from 'react';
import Auth from '../auth';
import { Redirect } from 'react-router-dom';

interface LogoutState {
  redirectHome: boolean;
}

export default class Logout extends React.Component<{}, LogoutState> {

  state: LogoutState = {
    redirectHome: false
  }

  componentDidMount() {
    this.logOut();
  }

  logOut = () => {
    Auth.deleteToken();
    this.setState({ redirectHome: true });
  }

  render() {
    const { redirectHome } = this.state;
    if(redirectHome === true) {
      return <Redirect to={'/'}/>;
    } else {
      return null;
    }
  }
}
