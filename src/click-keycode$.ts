import { from, fromEvent } from 'rxjs';
import { map, mergeAll } from 'rxjs/operators';

const button$ = from(
  document.querySelectorAll('[data-key]')
);

export const clickKeyCode$ = button$.pipe(
  map(button => fromEvent(button, 'click')),
  mergeAll(),
  map(event => parseInt(
    (event.target as HTMLElement).dataset.key || '0'
  ))
);

// next buttons page