import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { gridStyles } from '../ui/styles/grid.styles.js';
import { typographyStyles } from '../ui/styles/typography.styles.js';

/**
 * JrHomePage LitElement
 *
 */
@customElement('jr-home-page')
export class JrHomePage extends LitElement {

  static styles = [
    gridStyles,
    typographyStyles,
    css`
      .jr-home-page__list {
        display: flex;
        list-style: disc;
      }
      .jr-home-page__list-item {
        margin-left: 1rem;
      }
    `
  ];
  
  render() {
    return html`
      <section id="jr-home-page" class="jr-home-page">
        <article id="jr-home-page__overview">
          <h2>JR Design System & Labs</h2>
          <h3>An attempt at a Design System for building web experiences</h3>
        </article>
        <article>
          <h4>Release Notes:</h4>
          <ul class="jr-home-page__list">
            <li class="jr-home-page__list-item">
              This project uses TypeScript, which compiles code to ES2020 while leveraging newer JavaScript features
            </li>
          </ul>
        </article>
      </section>
    `;
  }
}
