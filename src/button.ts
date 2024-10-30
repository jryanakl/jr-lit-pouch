import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * JrButton LitElement
 *
 */
@customElement('jr-button')
export class JrButton extends LitElement {
  @property()
  buttonText = '';

  static styles = css`
    .jr-button {
      background-color: #1a1a1a;
      border: 1px solid var(--border-color);
      cursor: pointer;
      font-family: inherit;
      font-size: 1em;
      font-weight: 500;
      height: 40px;
      min-width: 130px;
      padding: 0.6em 1.2em;
      transition: border-color 0.25s;
    }

    .jr-button:hover {
      border-color: var(--blue-color-light);
    }

    .jr-button:focus,
    .jr-button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    .jr-button--rounded {
      border-radius: 8px;
      outline: none;
    }

    .jr-button--black {
      color: var(--white-color-soft);
      background: var(--bk-color);
    }

    .jr-button--black:hover {
      background: var(--box-shadow);
      color: var(--white-color);
      transition: all 0.4s ease;
    }
  `

  render() {
    return html`
      <button class="jr-button jr-button--rounded jr-button--black">
        ${this.buttonText}
      </button>
    `;
  }
}
