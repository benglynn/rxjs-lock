import { from, fromEvent } from 'rxjs';
import { map, mergeAll } from 'rxjs/operators';

const buttons = document.querySelectorAll('[data-key]');

export const clickKeyCode$ = from(buttons).pipe(
  map(button => fromEvent(button, 'click')),
  mergeAll(),
  map(event => parseInt(
    (event.target as HTMLElement).dataset.key || '0'
  ))
);