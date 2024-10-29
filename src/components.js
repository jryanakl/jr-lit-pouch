var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
/**
 * JrComponents LitElement
 *
 */
let JrComponents = class JrComponents extends LitElement {
    render() {
        return html `
      <div class="jr-components">
        <dl class="jr-components__list">
          <dt>Button</dt>
          <dd>
            <jr-button></jr-button>
          </dd>
          <dt>Table</dt>
          <dd>
            <jr-table></jr-table>
          </dd>
          <dt>Tree</dt>
          <dd>
            <jr-tree></jr-tree>
          </dd>
        </dl>
      </div>
      `;
    }
};
JrComponents.styles = css `
    :host {
      //border: 1px solid red;
    }

    .jr-components {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .jr-components__list {
      //margin-left: 10px;
    }
  `;
JrComponents = __decorate([
    customElement('jr-components')
], JrComponents);
export { JrComponents };
