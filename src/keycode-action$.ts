import { merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { Action } from './action$';

import { clickKeyCode$ } from './click-keycode$';
import { keyKeyCode$ } from './key-keycode$';

export const keycodeAction$ = merge(clickKeyCode$, keyKeyCode$)
    .pipe( map(n => ({ type: 'key', data: n }) as Action) );