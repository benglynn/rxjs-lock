import { merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { Action } from './action$';

import { clickKeyCode$ } from './click-keycode$';
import { keyCode$ } from './key-code$';

export const keycodeAction$ = merge(clickKeyCode$, keyCode$)
    .pipe( map(n => ({ type: 'key', data: n }) as Action) );