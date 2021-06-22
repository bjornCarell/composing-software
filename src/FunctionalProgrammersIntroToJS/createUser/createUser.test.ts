import { createUser } from './createUser';

describe('createUser function', () => {
  it('should return default values when passed an empty object as argument', () => {
    const expected = {
      name: 'Anonymous',
      avatarThumbnail: '/avatars/anonymous.png' 
    }

    const actual = createUser({});

    expect(actual).toEqual(expected);
  })
})