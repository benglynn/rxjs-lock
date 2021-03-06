import '../../style/index.scss';
import { getUser } from '../get-user';

const pin = [1, 2, 3, 4];

getUser(pin).subscribe({
  next: s => console.log(s),
  error: (e: Error) => console.error(e.message),
  complete: () => console.log('complete')
});

// next: new page