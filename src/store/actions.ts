import { UserState, Action } from '../interfaces';

interface AddUserAction extends Action {
  data: UserState;
}

const addUser = (userData: UserState): AddUserAction => {
  return {
    type: 'ADD_USER_DATA',
    data: userData
  };
};

export default addUser;
