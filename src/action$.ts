import { Subject } from 'rxjs';

export interface Action {
  type: string;
  data?: any
}

export const action$ = new Subject<Action>();