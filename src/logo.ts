import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('jr-logo')
export class JrLogo extends LitElement {
  render() {
    return html`
      <div class="jr-logo">
        <code>JrLogo</code>
      </div>
      `;
  }

  static styles = css`
    :host {
      border: 1px solid red;
      display: block;
      height: 40px;
      width: 60px;
    }

    .jr-logo {
      border: 1px solid green;
    }
  `
}
