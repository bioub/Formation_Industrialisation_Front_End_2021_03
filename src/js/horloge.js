import { format } from 'date-fns';
import config from '../config.json5';

export class Horloge {
  /**
   * @constructor
   * @param {HTMLElement} containerEl
   */
  constructor(containerEl) {
    this._containerEl = containerEl;
  }

  _render() {
    const now = new Date();
    this._containerEl.innerText = format(now, config.formatNow);
  }

  start() {
    this._render();
    setInterval(this._render.bind(this), 1000);
  }
}
