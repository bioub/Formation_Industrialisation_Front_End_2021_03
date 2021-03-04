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
    this._containerEl.innerText = now.toLocaleTimeString();
  }

  start() {
    this._render();
    setInterval(this._render.bind(this), 1000);
  }
}
