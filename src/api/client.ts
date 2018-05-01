import axios from 'axios';

export namespace Api {

  interface Methods {
  }

  export class Client implements Methods {

    private readonly url: string | undefined; // Why?
    private readonly clientId: string | undefined;
    private readonly clientSecret: string | undefined;
    private axiosClient;

    public constructor() {
      this.url = process.env.REACT_APP_SPOTIFY_URL;
      this.clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
      this.clientSecret = process.env.REACT_APP_SPOTIFY_SECRET;
      this.axiosClient = axios.create({
        timeout: 1000,
        headers: {}
      });
    }
  }
}
