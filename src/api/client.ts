export namespace Api {

  interface Methods {

  }

  export class Client implements Methods {

    private readonly url: string | undefined; // Why?

    constructor() {
      this.url = process.env.REACT_APP_SPOTIFY_URL;
    }
  }
}
