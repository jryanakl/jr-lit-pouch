var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
let JrLogo = class JrLogo extends LitElement {
    render() {
        return html `
      <div class="jr-logo">
        <code>JrLogo</code>
      </div>
      `;
    }
};
JrLogo.styles = css `
    :host {
      border: 1px solid red;
      display: block;
      height: 40px;
      width: 60px;
    }

    .jr-logo {
      border: 1px solid green;
    }
  `;
JrLogo = __decorate([
    customElement('jr-logo')
], JrLogo);
export { JrLogo };
