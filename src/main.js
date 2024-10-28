var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import db from './db';
import litLogo from './assets/lit.svg';
import viteLogo from '/vite.svg';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let JrMain = class JrMain extends LitElement {
    constructor() {
        super(...arguments);
        this.items = [];
        /**
         * Copy for the read the docs hint.
         */
        this.docsHint = 'Click on the Vite and Lit logos to learn more';
        /**
         * The number of times the button has been clicked.
         */
        this.count = 0;
    }
    async connectedCallback() {
        super.connectedCallback();
        // Fetch all items from the database
        const result = await db.allDocs();
        // Type 'row' explicitly to avoid 'any' type error
        this.items = result.rows.map((row) => row.doc);
    }
    render() {
        return html `
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
        <ul>
          ${this.items.map(item => html `<li>${item.name}: ${item.description}</li>`)}
        </ul>
      </div>
      </section>
    `;
    }
    _onClick() {
        this.count++;
    }
};
JrMain.styles = css `
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
  `;
__decorate([
    state()
], JrMain.prototype, "items", void 0);
__decorate([
    property()
], JrMain.prototype, "docsHint", void 0);
__decorate([
    property({ type: Number })
], JrMain.prototype, "count", void 0);
JrMain = __decorate([
    customElement('jr-main')
], JrMain);
export { JrMain };
