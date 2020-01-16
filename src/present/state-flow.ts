import '../../style/index.scss';

import { scan } from 'rxjs/operators';
import { State, initialState } from '../state';
import { action$, Action } from '../action$';
import { keycodeAction$ } from '../keycode-action$';
import { keyReducer } from '../key-reducer';

keycodeAction$.subscribe(action$);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'key':
      return keyReducer(state, action);
    default:
      return state;
  }
}

const state$ = action$.pipe( scan(reducer, initialState) );

state$.subscribe(state => console.log(state.pin));