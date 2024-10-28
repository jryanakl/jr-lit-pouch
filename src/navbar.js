var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
let JrNavbar = class JrNavbar extends LitElement {
    render() {
        return html `
      <ul class="jr-navbar">
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    `;
    }
};
JrNavbar.styles = css `
    :host {
      display: block;
      border: 1px solid red;
    }

    .jr-navbar {
      border: 1px solid green;
    }
  `;
JrNavbar = __decorate([
    customElement('jr-navbar')
], JrNavbar);
export { JrNavbar };
