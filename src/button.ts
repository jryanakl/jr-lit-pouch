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
      font-weight: bold;
      min-width: 130px;
      height: 40px;
      padding: 5px 10px;
      cursor: pointer;
    }

    .jr-button--rounded {
      border: 2px solid var(--border-color);
      border-radius: 5px;
      outline: none;
    }

    .jr-button--black {
      color: var(--white-color-soft);
      background: var(--bk-color);
    }

    .jr-button--black:hover {
      background: var(--white-color);
      color: #212529;
      transition: all 0.3s ease;
    }
  `

  render() {
    return html`
      <button class="jr-button jr-button--rounded jr-button--black">${this.buttonText}</button>
    `;
  }
}
