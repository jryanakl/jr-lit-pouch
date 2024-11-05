import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import litLogo from '../assets/lit.svg';
import viteLogo from '/vite.svg';
import { typographyStyles } from '../ui/styles/typography.styles.js';


/**
 * JrToolingPage LitElement
 *
 */
@customElement('jr-tooling-page')
export class JrToolingPage extends LitElement {
  @property()
  toolsSubHeader = 'Click on the Vite and Lit logos to learn more';

  static styles = typographyStyles;
  
  render() {
    return html`
      <section id="jr-tooling-page" class="jr-tooling-page">
        <h2>Tooling</h2>
        <p>Using Lit + TypeScript + PouchDB + Vite</p>
        <div id="jr-tooling-page__vite">
          <a aria-label="Lit Logo" href="https://lit.dev" target="_blank">
            <img src=${litLogo} class="jr-main__tool-logo lit" alt="Lit logo" />
          </a>
          <a href="https://vite.dev" target="_blank">
            <img src=${viteLogo} class="jr-main__tool-logo" alt="Vite logo" />
          </a>
          <div>
            <p>${this.toolsSubHeader}</p>
          </div>
        </div>
      </section>
      `;
  }
}
