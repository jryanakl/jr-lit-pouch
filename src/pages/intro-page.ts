import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * JrIntroPage LitElement
 *
 */
@customElement('jr-intro-page')
export class JrIntroPage extends LitElement {
  render() {
    return html`
      <section id="jr-intro-page">
        <h1>JR Design System</h1>
        <p class="header-sub-text">Accessible design system for building web experiences</p>
      </section>
    `;
  }
}
