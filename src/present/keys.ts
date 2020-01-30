import '../../style/index.scss';
import { keyKeyCode$ } from '../key-keycode$';

keyKeyCode$.subscribe({
    next: n => console.log(n)
});

// next: keys page