import { Buffer } from 'buffer';
import process from 'process';
import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg';
import { gridStyles } from './grid.styles.js';

import { RouterService } from './routing.service.js';
import { db, ItemDoc } from './db.js';

console.log(`%cJrMain`, `font-size: 14px; color: blue`);

window.Buffer = Buffer;
window.process = process;

// Create and export the router instance
export const router = new RouterService();
console.log('router', router);

// Use the db instance
db.info()
  .then((info) => {
    console.log('Database info:', info);
  })
  .catch((err) => {
    console.error('Error accessing the database:', err);
  });

/**
 * JrMain LitElement
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('jr-main')
export class JrMain extends LitElement {
  currentRoute: string = router.currentRoute;

  @state() items: Array<any> = [];

  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  constructor() {
    super();
  }

  async connectedCallback() {
    super.connectedCallback();
    // Fetch all items from the database

    let result;

    if (result) {
      console.log('result', result);
    }

    if (this.items) {
      console.log('items', this.items);
    }

    // Fetch all items from the database
    result = await db.allDocs<ItemDoc>({ include_docs: true });
    this.items = result.rows.map((row: any) => row?.doc ? row.doc! : undefined);
  }

  static styles = [
    gridStyles,
    css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: left;
      }

      h1 {
        color: #ffffff;
        font-size: 3rem;
        margin: 0 0 12px 0;
      }

      h2 {
        border-bottom-color: #333;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        padding-bottom: 16px;
        font-size: 1.75rem;
        margin: 0;
      }

      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
      }

      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }

      .logo.lit:hover {
        filter: drop-shadow(0 0 2em #325cffaa);
      }

      .card {
        padding: 2em;
      }

      .read-the-docs {
        color: #888;
      }

      .jr-list {
        list-style-type: square;
        padding: 0;
        margin: 0;
      }

      .jr-list li {
        padding: 10px 15px;
        margin: 5px 0;
        background-color: #f0f0f0;
        color: #333;
        border-radius: 5px;
        transition: background-color 0.3s;
      }

      .jr-list li:hover {
        background-color: #e0e0e0;
        cursor: pointer;
      }

      ::slotted(h1) {
        font-size: 3.2em;
        line-height: 1.1;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }

      a:hover {
        color: #535bf2;
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }

      button:hover {
        border-color: #646cff;
      }

      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `
  ];

  render() {
    return html`
      <section class="jr-main">
        <div class="jr-grid__block">
          <h1>JR Design System</h1>
          <p>Accessible design system for building web experiences</p>
        </div>
        <div class="jr-grid__block">
          <h2>Components</h2>
          <p>Accessible components</p>
          <jr-app></jr-app>
        </div>
        <div class="jr-grid__block">
          <h2>Tooling</h2>
          <p>Lit + TypeScript + PouchDB + Vite</p>
          <div>
            <a href="https://lit.dev" target="_blank">
              <img src=${litLogo} class="logo lit" alt="Lit logo" />
            </a>
            <a href="https://vite.dev" target="_blank">
              <img src=${viteLogo} class="logo" alt="Vite logo" />
            </a>
            <div>
              <p class="read-the-docs">${this.docsHint}</p>
              <p>Testing slot</p>
              <slot></slot>
            </div>
          </div>
        </div>
        <div class="jr-grid__block">
          <h2>PouchDB</h2>
          <p>Testing Dummy Database Items</p>
          <ul class="jr-main jr-list">
            ${this.items.map(item => html`<li>${item.name}: ${item.description}</li>`)}
          </ul>
        </div>
      </section>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'jr-main': JrMain
  }
}
