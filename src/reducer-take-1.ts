import { State } from './state';
import { Action } from './action$';
import { keyReducer } from './key-reducer';

export function
  reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'key':
      return keyReducer(state, action);
    default:
      return state;
  }
}

// next: key-reducer.ts