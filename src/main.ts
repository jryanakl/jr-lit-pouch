import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg';
import { db } from './db.js';
import { ItemDoc } from './db.js';
import { Buffer } from 'buffer';
import process from 'process';

console.log(`%cJrMain`, `font-size: 14px; color: blue`);

window.Buffer = Buffer;
window.process = process;

// Use the db instance
db.info()
  .then((info) => {
    console.log('Database info:', info);
  })
  .catch((err) => {
    console.error('Error accessing the database:', err);
  });

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('jr-main')
export class JrMain extends LitElement {
  @state() items: Array<any> = [];

  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  @property({ type: Number })
  count = 0;

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

  render() {
    return html`
      <section class="jr-main">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src=${viteLogo} class="logo" alt="Vite logo" />
          </a>
          <a href="https://lit.dev" target="_blank">
            <img src=${litLogo} class="logo lit" alt="Lit logo" />
          </a>
        </div>
        <slot></slot>
        <div class="card">
          <button @click=${this._onClick} part="button">
            count is ${this.count}
          </button>
        </div>
        <p class="read-the-docs">${this.docsHint}</p>
        <div>
          <h2>Database Items</h2>
          <ul class="jr-main jr-list">
            ${this.items.map(item => html`<li>${item.name}: ${item.description}</li>`)}
          </ul>
        </div>
      </section>
    `
  }

  private _onClick() {
    this.count++
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
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
      border: 1px solid #ccc;
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
}

declare global {
  interface HTMLElementTagNameMap {
    'jr-main': JrMain
  }
}
