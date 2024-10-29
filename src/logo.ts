import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import designServicesLogo from './assets/design-services-logo.svg';

/**
 * JrLogo LitElement
 *
 */
@customElement('jr-logo')
export class JrLogo extends LitElement {
  static styles = css`
    :host {
    }

    .jr-logo {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    
    .jr-logo__logo {
      height: auto;
    }

    .jr-logo__text {
      font-size: 18px;
      font-weight: 600;
    }
  `

  render() {
    return html`
      <div class="jr-logo">
        <div class="jr-logo__logo">
           <img src=${designServicesLogo} alt="Design Services Logo" />
        </div>&nbsp;
        <p class="jr-logo__text">JR Design System</p>
      </div>
      `;
  }
}
