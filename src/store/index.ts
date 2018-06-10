import { createStore } from 'redux';
import spotifyApp from './state';

const enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;
const store: any = enhancer(spotifyApp, {});
export default store;
