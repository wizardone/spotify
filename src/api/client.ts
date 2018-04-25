export namespace Api {

  interface Methods {
    login(email: string, password: string): void;
  }

  export class Client implements Methods {

    private readonly url: string | undefined; // Why?
    private readonly clientId: string | undefined;
    private readonly clientSecret: string | undefined;

    constructor() {
      this.url = process.env.REACT_APP_SPOTIFY_URL;
      this.clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
      this.clientSecret = process.env.REACT_APP_SPOTIFY_SECRET;
    }

    login() {
    
    }
  }
}
