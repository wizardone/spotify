import axios from 'axios';

export namespace Api {

  interface Methods {
    getToken(accessCode: string): void;
  }

  export class Client implements Methods {

    private readonly url: string | undefined; // Why?
    private readonly clientId: string | undefined;
    private readonly clientSecret: string | undefined;

    public constructor() {
      this.url = process.env.REACT_APP_SPOTIFY_URL;
      this.clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
      this.clientSecret = process.env.REACT_APP_SPOTIFY_SECRET;
    }

    getToken(accessCode: string) {
      return axios.post('https://accounts.spotify.com/api/token', {
        grant_type: 'authorization_code',
        code: accessCode,
        redirect_uri: process.env.REACT_APP_SPOTIFY_REDIRECT_URL
      });
    }
  }
}
