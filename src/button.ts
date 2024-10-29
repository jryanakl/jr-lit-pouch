import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * JrButton LitElement
 *
 */
@customElement('jr-button')
export class JrButton extends LitElement {
  @property()
  buttonText = 'Click me!';

  static styles = css`
    :host {
    }

    .jr-button {
      font-weight: bold;
      min-width: 130px;
      height: 40px;
      padding: 5px 10px;
      cursor: pointer;
    }

    .jr-button--rounded {
      border: 2px solid #212529;
      border-radius: 5px;
      outline: none;
    }

    .jr-button--black {
      color: #fff;
      background: #212529;
    }

    .jr-button--black:hover {
      background: #fff;
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
