var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * JrButton LitElement
 *
 */
let JrButton = class JrButton extends LitElement {
    constructor() {
        super(...arguments);
        this.buttonText = 'Click me!';
    }
    render() {
        return html `
      <button class="jr-button jr-button--rounded jr-button--black">${this.buttonText}</button>
    `;
    }
};
JrButton.styles = css `
    :host {
    }

    .jr-button {
      font-weight: bold;
      min-width: 130px;
      height: 40px;
      padding: 5px 10px;
      cursor: pointer;
    }

    .jr-button--rounded {
      border: 2px solid #212529;
      border-radius: 5px;
      outline: none;
    }

    .jr-button--black {
      color: #fff;
      background: #212529;
    }

    .jr-button--black:hover {
      background: #fff;
      color: #212529;
      transition: all 0.3s ease;
    }
  `;
__decorate([
    property()
], JrButton.prototype, "buttonText", void 0);
JrButton = __decorate([
    customElement('jr-button')
], JrButton);
export { JrButton };
