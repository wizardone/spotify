import * as React from 'react';
import '../style/App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Auth from '../auth';
import Login from './Login';
import Logout from './Logout';
import Home from './Home';
import Profile from './Profile';
import Callback from './Callback';
import PrivateRoute from './PrivateRoute';

class App extends React.Component<{}, {}> {

  renderHeader = () => {
    if (this.userLogged()) {
      return (
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/logout">Logout</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      );
    }
  }

  renderMainContent = () => (
    <div>
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/login" component={Login}/>
        <Route exact={true} path="/logout" component={Logout}/>
        <PrivateRoute component={Profile} path="/profile" guardFunc={Auth.getToken}/>
        <Route path="/callback" component={Callback}/>
      </Switch>
    </div>
  )

  render() {
    return (
      <div className="App">
        {this.renderHeader()}
        {this.renderMainContent()}
      </div>
    );
  }

  private userLogged = (): boolean => {
    return Auth.getToken() !== null;
  }
}

export default App;
