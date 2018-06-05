import * as React from 'react';
import { Api } from '../api/client';

interface LoginData {
  email: string;
  password: string;
}

export default class Login extends React.Component<{}, LoginData> {

  state: LoginData = {
    email: '',
    password: ''
  };

  constructor(props: {}) {
    super(props);
  }

  loginClick = () => {
    const spotifyAuthUrl: string = [
      `https://accounts.spotify.com/authorize/?`,
      `response_type=token&`,
      `client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&`,
      `redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT_URL}`
    ].join('');
    window.location.href = spotifyAuthUrl;
  }

  public render() {
    return (
      <div>
        <a href="#" onClick={this.loginClick}>Spotify Login</a>
      </div>
    );
  }
}
