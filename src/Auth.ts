const ACCESS_TOKEN = 'access_token';

export default class Auth {

  public static saveToken(accessToken: string): void {
    localStorage.setItem(ACCESS_TOKEN, accessToken);
  }

  public static deleteToken(): void {
    localStorage.removeItem(ACCESS_TOKEN);
  }
}
