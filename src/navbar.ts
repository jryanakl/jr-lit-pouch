import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('jr-navbar')
export class JrNavbar extends LitElement {
  render() {
    return html`
      <ul class="jr-navbar">
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    `;
  }

  static styles = css`
    :host {
      display: block;
      border: 1px solid red;
    }

    .jr-navbar {
      border: 1px solid green;
    }
  `
}
