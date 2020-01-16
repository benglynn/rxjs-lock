import { State } from './state';

export function updateUi(state: State) {

  document.querySelectorAll('[data-key]').forEach(el => {
    const button = el as HTMLButtonElement;
    button.disabled = state.mode !== 'ready';
    button.hidden = state.mode === 'open';
  })

  const showWhen = document
    .querySelectorAll('[data-show-when');
    showWhen.forEach(el => {
    const htmlEl = el as HTMLElement;
    const mode = htmlEl.dataset.showWhen as string;
    htmlEl.hidden = mode !== state.mode;
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