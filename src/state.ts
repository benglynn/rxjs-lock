export interface State {
  pin: number[];
  mode: 'ready' | 'waiting' | 'barred' | 'open';
  tries: number;
};

export const initialState: State = {
    pin: [],
    mode: 'ready',
    tries: 0
  };

// next: reducer-take-1.ts