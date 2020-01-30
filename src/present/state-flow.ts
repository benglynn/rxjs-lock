import '../../style/index.scss';

import { scan } from 'rxjs/operators';
import { initialState } from '../state';
import { action$ } from '../action$';
import { keycodeAction$ } from '../keycode-action$';
import { reducer } from '../reducer-take-1';

keycodeAction$.subscribe(action$);

const state$ = action$.pipe( scan(reducer, initialState) );

state$.subscribe(state => console.log(state.pin));

// next: state-flow page