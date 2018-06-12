import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../components/App';
import Auth from '../auth';
import { MemoryRouter, Link } from 'react-router-dom';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><App/></MemoryRouter>, div);
  });

  it('renders the proper header links if you are not logged in', () => {
    const app = shallow(<App />);

    expect(app.find(Link)).toHaveLength(2);
  });

  it('renders the proper header links if you are logged in', () => {
    Auth.getToken = jest.fn(() => 'token');
    const app = shallow(<App />);

    expect(app.find(Link)).toHaveLength(3);
  });
});
