import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { gridStyles } from '../ui/styles/grid.styles.js';
import { typographyStyles } from '../ui/styles/typography.styles.js';

/**
 * JrCrazyPage LitElement
 *
 */
@customElement('jr-crazy-page')
export class JrCrazyPage extends LitElement {

  static styles = [
    gridStyles,
    typographyStyles,
    css`
      .jr-crazy-page__list {
        display: flex;
        list-style: disc;
      }
      .jr-crazy-page__list-item {
        margin-left: 1rem;
      }
    `
  ];
  
  render() {
    return html`
      <section id="jr-crazy-page" class="jr-crazy-page">
        <article id="jr-crazy-page">
          <h2>Crazy Page</h2>
          <h3>This is the Crazy Page</h3>
        </article>
        <article class="jr-crazy-page__options">
          <h4>Please choose from the following options</h4>
          <dl class="jr-grid__list">
            <dt>Default</dt>
            <dd>
              <jr-button buttonRole="button" buttonType="button" aria-label="Make this site crazy"></jr-button>
            </dd>
            <dt>Make this site crazy</dt>
          </dl>
        </article>
      </section>
    `;
  }
}
