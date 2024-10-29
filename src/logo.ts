import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import designServicesLogo from './assets/design-services-logo.svg';

/**
 * JrLogo LitElement
 *
 */
@customElement('jr-logo')
export class JrLogo extends LitElement {
  @property()
  altText = `Design Services Logo`;

  @property()
  logoText = `JR Design System`;

  static styles = css`
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
           <img src=${designServicesLogo} alt=${this.altText} />
        </div>&nbsp;
        <p class="jr-logo__text">${this.logoText}</p>
      </div>
      `;
  }
}
