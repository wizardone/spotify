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
    const spotifyAuthUrl = [
      `https://accounts.spotify.com/authorize/?`,
      `response_type=code&`,
      `client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&`,
      `redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT_URL}`
    ].join('');
    console.log(spotifyAuthUrl);
    // window.location.href = spotifyAuthUrl;
  }

  onEmailChange = (event): void => {
    this.setState({email: event.target.value});
    console.log(new Api.Client());
  }

  onPasswordChange = (event): void => {
    this.setState({password: event.target.value});
  }

  onSubmit = (event): void => {
    event.preventDefault();
  }

  public render() {
    return (
      <div>
        <h2>Login</h2>
        <form action="#" onSubmit={this.onSubmit}>
          <label><br />
            Email: <input type="text" name="email" value={this.state.email || ''} onChange={this.onEmailChange}/>
          </label>
          <label><br />
          Password: <input type="password" name="password" value={this.state.password || ''} onChange={this.onPasswordChange}/>
          </label><br />
          <input type="submit" value="Login"/>
        </form>
      </div>
    );
  }
}
