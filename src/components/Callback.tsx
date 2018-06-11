import * as React from 'react';
import '../style/App.css';
import Auth from '../auth';
import { Api } from '../api/client';
import { Redirect } from 'react-router-dom';

interface CallbackProps {
  location: {
    hash: number;
    pathname: string;
    search: string;
    state: string | undefined
  };
}

interface CallbackState {
  readonly redirectHome: boolean;
}

export default class Callback extends React.Component<CallbackProps, CallbackState> {

  state: CallbackState = {
    redirectHome: false
  };

  public constructor(props: CallbackProps) {
    super(props);
    const hashData: string = String(props.location.hash).split('#')[1];
    const accessToken: string = this.obtainAccessToken(hashData);
    if (accessToken) {
      Auth.saveToken(accessToken);
    }
  }

  componentDidMount() {
    this.setState({ redirectHome: true });
  }

  public render() {
    const { redirectHome } = this.state;
    if (redirectHome === true) {
      return <Redirect to={'/'}/>; 
    } else {
      return null;
    }
  }

  private obtainAccessToken(hashData): string {
    const data: Array<string> = hashData.split('&');

    return data[0].split('=')[1];
  }
}
