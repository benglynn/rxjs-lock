import { fromEvent } from 'rxjs';
import { map, filter } from 'rxjs/operators';

export const keyKeyCode$ = fromEvent(document, 'keydown').pipe(
  map(event => (event as KeyboardEvent).keyCode),
  filter(keyCode =>
    keyCode === 8 || (keyCode > 47 && keyCode < 58))
)