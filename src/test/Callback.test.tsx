import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import { BrowserRouter, Redirect } from 'react-router-dom';
import Callback from '../components/Callback';

describe('<Callback />', () => {
  const props = {
    location: {
      hash: '58493#23423'
    }
  }
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Callback {...props}/></BrowserRouter>, div);
  });

  it('redirects to the home screen', () => {
    const logout = enzyme.shallow(<Callback {...props}/>);
    logout.setState({redirectHome: true});

    expect(logout.find(Redirect)).toHaveLength(1);
  });

  it('does not redirect to the home screen', () => {
    const logout = enzyme.shallow(<Callback {...props}/>);
    logout.setState({redirectHome: false});

    expect(logout.html()).toEqual(null);
  });
});
