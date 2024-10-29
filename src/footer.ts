import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('jr-footer')
export class JrLogo extends LitElement {
  static styles = css`
    :host {
      //border: 1px dashed red;
      display: flex;
      flex-flow: row;
    }

    .jr-footer {
      //border: 1px solid green;
      width: 90%
    }

    .jr-footer__logo {
      //border: 1px dashed white;
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
