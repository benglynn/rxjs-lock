import { fromEvent } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const keyDown$ = fromEvent(document, 'keydown');

export const keyKeyCode$ = keyDown$.pipe(
  map(event => (event as KeyboardEvent).keyCode),
  filter(keyCode =>
    keyCode === 8 || (keyCode > 47 && keyCode < 58))
)

// next: keys.ts