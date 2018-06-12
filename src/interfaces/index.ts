interface SpotifyImage {
  height: string;
  width: string;
  url: string;
}

export interface User {
  birthdate?: string;
  country?: string;
  display_name: string;
  email?: string;
  external_urls: {
    [key: string]: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: Array<SpotifyImage>;
  product: string;
  type: string;
  uri: string;
}

export interface AppState {
  user: User,
  tracks: {
  
  },
  artists: {
  
  }
}

export interface Action {
  type: string;
}
