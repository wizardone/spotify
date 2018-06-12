import { 
  AppState,
  Action,
  User 
} from '../interfaces';

interface AddUserAction extends Action {
  data: User;
}

const addUser = (userData: User): AddUserAction => {
  return {
    type: 'ADD_USER_DATA',
    data: userData
  };
};

export default addUser;
