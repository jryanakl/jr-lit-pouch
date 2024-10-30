import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * JrFooter LitElement
 */
@customElement('jr-footer')
export class JrFooter extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .jr-footer {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 90%;
      padding: 1rem;
    }

    .jr-footer__logo {
      width: 60%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  render() {
    return html`
      <div class="jr-footer" role="contentinfo" aria-label="Footer">
        <div class="jr-footer__logo">
          <jr-logo aria-label="JR Design System Logo"></jr-logo>
        </div>
        <slot></slot>
      </div>
    `;
  }
}
