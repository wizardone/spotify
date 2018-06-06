import * as React from 'react';
import '../style/App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Auth from '../auth';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';
import Callback from './Callback';
import PrivateRoute from './PrivateRoute';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

const Header = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/profile">Profile</Link></li>
  </ul>
);

const Main = () => (
  <div>
    <Switch>
      <Route exact={true} path="/" component={Home}/>
      <Route exact={true} path="/login" component={Login}/>
      <PrivateRoute component={Profile} path="/profile" guardFunc={Auth.getToken}/>
      <Route path="/callback" component={Callback}/>
    </Switch>
  </div>
);
export default App;
