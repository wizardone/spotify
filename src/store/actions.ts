import { UserState } from '../interfaces';

interface AddUserAction {
  type: string;
  data: UserState;
}

const addUser = (userData: UserState): AddUserAction => {
  return {
    type: 'ADD_USER_DATA',
    data: userData
  };
};

export default addUser;
