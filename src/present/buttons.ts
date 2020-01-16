import '../../style/index.scss';

import { clickKeyCode$ } from '../click-keycode$';

clickKeyCode$.subscribe(n => console.log(n));