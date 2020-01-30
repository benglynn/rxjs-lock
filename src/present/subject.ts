import '../../style/index.scss';
import { action$ } from '../action$';
import { keycodeAction$ } from '../keycode-action$';

keycodeAction$.subscribe(action$);

action$.subscribe(action => console.log(action));

// next: subject page