import '../../style/index.scss';
import { scan, withLatestFrom } from 'rxjs/operators';
import { action$ } from '../action$';
import { keycodeAction$ } from '../keycode-action$';
import { reducer } from '../reducer';
import { sideEffects } from '../side-effects';
import { updateUi } from '../update-ui';
import { initialState } from '../state';

keycodeAction$.subscribe(action$);

const state$ = action$.pipe( scan(reducer, initialState));

state$.subscribe(state => updateUi(state));

action$.pipe(
  withLatestFrom(state$),
).subscribe(([action, state]) => sideEffects(action, state));

// next: side-effects.ts