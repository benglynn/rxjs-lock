import { State } from './state';

export function updateUi(state: State) {

  document.querySelectorAll('[data-key]').forEach(el => {
    const button = el as HTMLButtonElement;
    button.disabled = state.mode !== 'ready';
  })

  const showWhen = document
    .querySelectorAll('[data-show-when');
    showWhen.forEach(el => {
    const htmlEl = el as HTMLElement;
    const mode = htmlEl.dataset.showWhen as string;
    htmlEl.hidden = mode.indexOf( state.mode) === -1;
  });

  const pin = document.querySelector('.pin') as HTMLElement;
  pin.innerText = state.pin.join('');

  const colour =
    state.mode === 'open' ? '#00533F' :
    state.mode === 'barred' ? '#53001B' :
    'black';
  document.documentElement.style
    .setProperty('--screen-background-colour', colour);
}