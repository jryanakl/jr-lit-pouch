import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('jr-footer')
export class JrLogo extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-flow: row;
    }

    .jr-footer {
      width: 90%
    }

    .jr-footer__logo {
      width: 60%
    }
  `

  render() {
    return html`
      <div class="jr-footer">
        <jr-logo class="jr-footer__logo"></jr-logo>
      </div>
      `;
  }
}
