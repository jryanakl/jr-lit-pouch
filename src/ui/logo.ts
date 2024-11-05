import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import designServicesLogo from '../assets/design-services-logo.svg';

/**
 * JrLogo LitElement
 */
@customElement('jr-logo')
export class JrLogo extends LitElement {
  @property({ type: String }) altText = 'Design Services Logo';
  @property({ type: String }) logoText = `  JR Design System & Labs`;

  static styles = css`
    .jr-logo {
      display: flex;
      flex-direction: row;
      gap: 0.35rem;
      align-items: center;
    }

    .jr-logo__logo {
      height: auto;
    }

    .jr-logo__text {
      font-size: 18px;
      font-weight: 600;
    }
  `;

  render() {
    return html`
      <div class="jr-logo" role="img" aria-label="${this.logoText}">
        <div class="jr-logo__logo" aria-hidden="true">
          <img src=${designServicesLogo}
               alt=${this.altText}
               style="filter: invert(71%) sepia(85%) saturate(498%) hue-rotate(157deg) brightness(96%) contrast(101%);" />
        </div>
        <div class="jr-logo__text">
          <slot>
            ${this.logoText}
          </slot>
        </div>
      </div>
    `;
  }
}
