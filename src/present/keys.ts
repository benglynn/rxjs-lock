import '../../style/index.scss';
import { keyKeyCode$ } from '../key-keycode$';

const subscriber = {
  next: (n: number) => console.log(n),
  error: (e: Error) => console.error(e),
  complete: () => console.log('complete')
}

keyKeyCode$.subscribe(subscriber);