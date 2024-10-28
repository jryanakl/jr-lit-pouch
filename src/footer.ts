import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('jr-footer')
export class JrLogo extends LitElement {

  render() {
    return html`
      <div class="jr-footer">
        <code>JrFooter</code>
      </div>
      `;
  }

  static styles = css`
    :host {
      border: 1px solid red;
      display: block;
      height: 40px;
      width: 80px;
    }

    .jr-footer {
      border: 1px solid green;
    }
  `
}
