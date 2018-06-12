import { AppState } from '../interfaces';

const initialState = {
  user: {
    birthdate: '',
    country: '',
    display_name: '',
    email: '',
    external_urls: {
      'spotify': ''
    },
    followers: {
      href: '',
      total: 0
    },
    href: '',
    id: '',
    images: [],
    product: '',
    type: '',
    uri: ''
  },
  tracks: {
    
  },
  artists: {
    
  }
};

const spotifyApp = (state: AppState, action) => {
  switch (action.type) {
    case 'ADD_USER_DATA':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.data
        }
      }
    default:
      return initialState;
  }
};

export default spotifyApp;
