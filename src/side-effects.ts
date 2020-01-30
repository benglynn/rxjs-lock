import { of } from 'rxjs';
import { catchError, delay, tap, map } from 'rxjs/operators';
import { action$, Action } from './action$';
import { State } from './state';
import { getUser } from './get-user';

export function sideEffects(action: Action, state: State) {
  switch (action.type) {
    case 'key':
      const pinLength = 4;
      const isFullPin = state.pin.length === pinLength;
      if (isFullPin && state.mode === 'ready') {
        action$.next({ type: 'login', data: state.pin })
      }
      break;
    case 'login':
      getUser(action.data).pipe(
        map(_ => ({ type: 'validPin' }) as Action),
        catchError(e => of(({ type: 'invalidPin' }))),
        tap(action => action$.next(action))
      ).subscribe({ error: console.error });
      break;
    case 'validPin':
      of({ type: 'reset' }).pipe(
        delay(2000), tap(a => action$.next(a))
      ).subscribe({ error: console.error });
      break;
    case 'invalidPin':
      if (state.mode === 'barred') {
        of({ type: 'reset' }).pipe(
          delay(2000), tap(a => action$.next(a))
        ).subscribe({ error: console.error });
      }
      break;
  }
}

// next: reducer.ts