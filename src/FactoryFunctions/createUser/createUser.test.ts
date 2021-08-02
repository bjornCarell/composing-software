import { createUser, createUserWithDefaults } from './createUser';

describe('create user function', () => {
  it('should set the name of a new user', () => {
    const myUser = createUser({username: 'echo', avatar: 'echo.png'});
    const Nemo = myUser.setUserName('Nemo');
    
    const expected = 'Nemo'
    const actual = Nemo.username;

    expect(actual).toEqual(expected);
  });
});

describe('create user defaults function', () => {
  it('should generate a user with default values', () => {
    const expected = {
      username: 'Anonymous',
      avatar: 'anon.png',
    };

    const actual = createUserWithDefaults();

    expect(actual).toEqual(expected);
  })
})