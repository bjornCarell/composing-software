import { createUser } from './createUser';

describe('create user function', () => {
  it('should set the name of a new user', () => {
    const myUser = createUser({username: 'echo', avatar: 'echo.png'});
    const Nemo = myUser.setUserName('Nemo');
    
    const expected = 'Nemo'
    const actual = Nemo.username;

    expect(actual).toEqual(expected);
  });
});