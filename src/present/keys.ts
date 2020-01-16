import '../../style/index.scss';
import { keyCode$ } from '../key-code$';

const subscriber = {
  next: (n: number) => console.log(n),
  error: (e: Error) => console.error(e),
  complete: () => console.log('complete')
}

keyCode$.subscribe(subscriber);