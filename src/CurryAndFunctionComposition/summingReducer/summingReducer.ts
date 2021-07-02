interface CounterState {
  value: number;
}

export const initialState: CounterState = {
  value: 0,
};

type Payload = {
  value: number;
  data?: unknown;
}

// With Redux we can use AnyAction type instead
// https://redux.js.org/usage/usage-with-typescript#type-checking-reducers
type Action = {
  type: string;
  payload: Payload;
}

export const ADD_VALUE = 'ADD_VALUE';

export const summingReducer = (state = initialState, action: Action) => {

  const { type, payload } = action;

  switch (type) {
    case ADD_VALUE:
      return state.value + payload.value
    default: return state;
  }
}

// Does TypeScript make the default return statement reduntant? 
// We will never be able to call the summingReducer without parameters