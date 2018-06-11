import 'raf/polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './style/index.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
