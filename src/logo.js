var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import designServicesLogo from './assets/design-services-logo.svg';
/**
 * JrLogo LitElement
 *
 */
let JrLogo = class JrLogo extends LitElement {
    render() {
        return html `
      <div class="jr-logo">
        <div class="jr-logo__logo">
           <img src=${designServicesLogo} alt="Design Services Logo" />
        </div>&nbsp;
        <p class="jr-logo__text">JR Design System</p>
      </div>
      `;
    }
};
JrLogo.styles = css `
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
  `;
JrLogo = __decorate([
    customElement('jr-logo')
], JrLogo);
export { JrLogo };
