import { 
  AppState,
  Action,
  User 
} from '../interfaces';

interface AddUserAction extends Action {
  data: User;
}

interface AddTrackAction extends Action {
  data: {};
}

const addUser = (userData: User): AddUserAction => {
  return {
    type: 'ADD_USER_DATA',
    data: userData
  };
};

const addTrack = (trackData) => {
  return {
    type: 'ADD_TRACK_DATA',
    data: trackData
  };
};

export {
  addUser,
  addTrack
};
