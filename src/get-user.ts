import { Observable } from 'rxjs';

export function getUser(pin: Array<number>) {
    return new Observable((subscriber) => {
      const respond = () => {
        if (pin.join('') === '1234') {
          subscriber.next('Ben');
          subscriber.complete();
        } else {
          subscriber.error(new Error('403 Forbidden'));
        }
      }
    setTimeout(respond, 1000);
    })
  }