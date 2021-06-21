import { myReducer } from './myReducer';

describe('my reducer function', () => {

  let action = {
    type: 'FOO',
    payload: {
      data: 'Some data',
      additionalData: 'Additional data',
    }
  }

  it('assigns payload to an empty object', () => {
    const expected = action.payload;
    const actual = myReducer(action);
    expect(actual).toEqual(expected);
  });

  it('assigns payload and state to an empty object', () => {
    const state = {
      hello: 'world',
    }

    const expected = {
      additionalData: 'Additional data',
      data: 'Some data',
      hello: 'world',
    }

    const actual = myReducer(action, state);

    expect(actual).toEqual(expected);
  })
});