import axios from 'axios';
import Auth from '../auth';

export namespace Api {

  interface Methods {
    me: () => Promise<{}>;
  }

  export class Client implements Methods {

    private readonly url: string | undefined; // Why?
    private readonly clientId: string | undefined;
    private readonly clientSecret: string | undefined;
    private axiosClient;

    public constructor() {
      this.url = process.env.REACT_APP_SPOTIFY_URL;
      /*this.clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
      this.clientSecret = process.env.REACT_APP_SPOTIFY_SECRET;*/
      this.axiosClient = axios.create({
        baseURL: this.url,
        timeout: 2000
      });
      this.addAuthorization();
    }

    public me = (): Promise<{}> => {
      return this.axiosClient.get(`/v1/me`).then(response => response.data);
    }

    private addAuthorization(): void {
      this.axiosClient.interceptors.request.use((config) => {
        const token = Auth.getToken();
        if (token != null) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      }, (error) => {
        return Promise.reject(error);
      });
    }
  }
}
