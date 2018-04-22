import * as React from 'react';
interface LoginData {
  email: string;
  password: string;
}

export default class Login extends React.Component<{}, LoginData> {

  state: LoginData = {
    email: '',
    password: ''
  };

  onEmailChange = (event): void => {
    this.setState({email: event.target.value});
  }

  onPasswordChange = (event): void => {
    this.setState({password: event.target.value});
  }

  public render() {
    return (
      <div>
        <form action="#" method="POST">
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
