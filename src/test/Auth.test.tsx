import Auth from '../Auth';
import {expect} from 'chai';

describe('Auth', () => {
  it('saveToken', () => {
    Auth.saveToken('some_token');

    expect(localStorage.getItem('access_token')).to.eql('some_token');
  });

  it('deleteToken', () => {
    Auth.saveToken('some_token');
    Auth.deleteToken();

    expect(localStorage.getItem('access_token')).to.eql(null);
  });
});
