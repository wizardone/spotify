import * as React from 'react';
import '../style/App.css';
import Auth from '../Auth';
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
    const accessCode: string = props.location.search.split('=')[1];
    // new Api.Client().getToken(accessCode);
  }

  public render() {
    return null;
  }
}
