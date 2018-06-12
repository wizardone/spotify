import { createStore } from 'redux';
import spotifyApp from './reducer';

const enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;
const store = enhancer(spotifyApp, {});
export default store;
