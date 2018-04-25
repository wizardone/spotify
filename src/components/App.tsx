import * as React from 'react';
import '../style/App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './Login';

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
const Home = () => (
  <div>Welcome!</div>
);
const Header = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/login">Login</Link></li>
  </ul>
);

const Main = () => (
  <div>
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/login" component={Login}/>
    </Switch>
  </div>
);
export default App;
