import { State, initialState } from './state';
import { Action } from './action$';
import { keyReducer } from './key-reducer';

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'key':
      return keyReducer(state, action);
    case 'login':
      return { ...state, mode: 'waiting' }
    case 'validPin':
      return { ...initialState, mode: 'open' }
    case 'invalidPin':
      const maxTries = 3;
      const tries = state.tries + 1;
      return {
        ...initialState, tries,
        mode: tries >= maxTries ? 'barred' : 'ready'
      }
    case 'reset':
      return initialState
    default:
      return state;
  }
}