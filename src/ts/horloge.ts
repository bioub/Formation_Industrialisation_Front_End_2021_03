import { format } from 'date-fns';

export class Horloge {
  constructor(private _containerEl: HTMLElement) {}

  _render() {
    const now = new Date();
    this._containerEl.innerText = format(now, 'HH:mm:ss');
  }

  start() {
    this._render();
    setInterval(this._render.bind(this), 1000);
  }
}
