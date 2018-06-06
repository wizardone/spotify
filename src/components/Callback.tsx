import * as React from 'react';
import '../style/App.css';
import Auth from '../auth';
import { Api } from '../api/client';

interface CallbackProps {
  location: {
    hash: number;
    pathname: string;
    search: string;
    state: string | undefined
  };
}

export default class Callback extends React.Component<CallbackProps, {}> {

  public constructor(props: CallbackProps) {
    super(props);
    const hashData: string = String(props.location.hash).split('#')[1];
    const accessToken: string = this.obtainAccessToken(hashData);
    if (accessToken) {
      Auth.saveToken(accessToken);
      new Api.Client().me();
    }
  }

  public render() {
    return null;
  }

  private obtainAccessToken(hashData): string {
    const data: Array<string> = hashData.split('&');

    return data[0].split('=')[1];
  }
}
