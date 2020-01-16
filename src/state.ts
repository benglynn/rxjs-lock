export interface State {
  pin: number[];
  tries: number;
  mode: 'ready' | 'waiting' | 'barred' | 'open';
};

export const initialState: State = {
    pin: [], tries: 0, mode: 'ready'
  };