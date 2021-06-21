export type Action = {
  type: string,
  payload: object,
}

export const myReducer = (action: Action, state = {}) => {
  const { type, payload } = action;

  switch(type) {
    case 'FOO': return Object.assign({}, state, payload);
    default: return state;
  }
}