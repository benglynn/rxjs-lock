import { State } from './state';
import { Action } from './action$';

export function keyReducer(state: State, action: Action) {

  if (state.mode === 'ready') {

    const code = action.data as number;
    const isNumberKey = code >= 48 && code <= 57;
    const pinLength = 4;

    if (isNumberKey && state.pin.length < pinLength) {
      const pin = state.pin.concat(code - 48);
      return { ...state, pin }
    } else if (code === 8 && state.pin.length > 0) {
      const pin = state.pin.slice(0, -1)
      return { ...state, pin }
    }

    return state;
  }

  return state;
}