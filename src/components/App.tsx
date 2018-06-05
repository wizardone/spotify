import * as React from 'react';
import '../style/App.css';
import { Link, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Callback from './Callback';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
};
const Header = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/login">Login</Link></li>
  </ul>
);
const Main = () => (
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/callback" component={Callback}/>
  </div>
);
export default App;
