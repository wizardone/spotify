import addUser from './actions';
import { UserState } from '../interfaces';
const spotifyApp = (state: UserState, action) => {
  switch (action.type) {
    case 'ADD_USER_DATA':
      return {...state, ...action.data};
    default:
      return state;
  }
};

export default spotifyApp;
