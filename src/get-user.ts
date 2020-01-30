import { Observable } from 'rxjs';

export function getUser(pin: Array<number>) {
    return new Observable((subscriber) => {
      setTimeout(respond, 1000); // fake it!
      function respond () {
        if (pin.join('') === '1234') {
          subscriber.next('Ben');
          subscriber.complete();
        } else {
          subscriber.error(new Error('403 Forbidden'));
        }
      }
    })
  }

  // next: new.ts