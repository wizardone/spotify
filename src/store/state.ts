interface SpotifyImage {
  height: string;
  width: string;
  url: string;
}

interface State {
  birthdate: string;
  country: string;
  display_name: string;
  email: string;
  external_urls: {
    [key: string]: string;
  }
  followers: {
    href: string;
    total: number
  },
  href: string;
  id: string;
  images: Array<SpotifyImage>;
  product: string;
  type: string
  uri: string;
}

const spotifyApp = (state: State, action) => {
  switch(action.type) {
    case 'ADD_USER_DATA':
      return {...state, ...action.payload};
    default:
      return state;
  }
}

export default spotifyApp;
