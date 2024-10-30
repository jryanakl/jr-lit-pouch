import { Buffer } from 'buffer';
import process from 'process';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { gridStyles } from './ui/grid.styles.js';
import Router from  './state/router.js'
import { JrIntroPage } from './pages/intro-page.js';
import { JrDataPage } from './pages/data-page.js';
import { JrComponentsPage } from './pages/components-page.js';
import { JrToolingPage } from './pages/tooling-page.js';

window.Buffer = Buffer;
window.process = process;
window.app = {}
window.app.router = new Router();

/**
 * JrMain LitElement
 *
 * @csspart button - The button
 */
@customElement('jr-main')
export class JrMain extends LitElement {
  @property()
  toolsSubHeader = 'Click on the Vite and Lit logos to learn more';

  constructor() {
    super();
  }

  static styles = [
    gridStyles,
    css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        text-align: left;
      }

      h1 {
        color: var(--white-color);
        font-size: 3rem;
        margin: 0 0 12px 0;
      }

      h2 {
        border-bottom-color: var(--border-color);
        border-bottom-style: solid;
        border-bottom-width: 1px;
        padding-bottom: 16px;
        font-size: 1.75rem;
        margin: 0;
      }

      .jr-main__tool-logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
      }

      .jr-main__tool-logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }

      .jr-main__tool-logo.lit:hover {
        filter: drop-shadow(0 0 2em #325cffaa);
      }

      .card {
        padding: 2em;
      }
    `
  ];

  render() {
    return html`
      <section class="jr-grid">
        <jr-intro-page></jr-intro-page>
      </section>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'jr-main': JrMain,
    'jr-intro-page': JrIntroPage,
    'jr-data-page': JrDataPage,
    'jr-components-page': JrComponentsPage,
    'jr-tooling-page': JrToolingPage,
  }
}
