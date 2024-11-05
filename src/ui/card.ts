import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Images
import litLogo from '../assets/lit.svg';

// CSS
import { gridStyles } from './styles/grid.styles';
import { linkStyles } from './styles/link.styles';
import { typographyStyles } from './styles/typography.styles';

const cardStyles = css`
  :host {
    --card-box-shadow: 0 0 0 0.25rem;
  }

  .jr-card {
    box-shadow: var(--card-box-shadow);
    border: 1px solid var(--border-color-default);
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .jr-card:hover {
    cursor: pointer;
    box-shadow: 0 0 0 0.25rem;
  }

  .jr-card a:focus {
    text-decoration: underline;
  }

  .jr-card:focus-within {
    box-shadow: 0 0 0 0.25rem;
  }

  .jr-card:focus-within a:focus {
    text-decoration: none;
  }

  .jr-card__img-container {
    background-color: var(--primary-black);
    display: flex;
    justify-content: center;
  }

  .jr-card__img {
    width: 60%;
  }

  .jr-card__heading {
    /* border: 1px solid orange; */
    color: var(--text-color-lightest);
    margin: unset;
  }

  .jr-card__p {
    font-size: var(--base-font-size);
    margin: unset;
  }

  .jr-card__button-bar {
    background-color: var(--shadow-color);
    border: 1px solid var(--border-color-default);
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .jr-card__small {
    display: flex;
    flex-flow: row;
    justify-content: center;
  }

  .jr-card__small__text {
    color: var(--text-color);
    font-family: ui-monospace;
    font-size: var(--sm-font-size);
  }
`;

@customElement('jr-card')
export class JrCard extends LitElement {
  static styles = [typographyStyles, gridStyles, linkStyles, cardStyles];

  render() {
    return html`
      <div class="jr-card" aria-label="Card">
        <div class="jr-card__img-container">
          <img class="jr-card__img" src="${litLogo}" alt="">
        </div>
        <h3 class="jr-card__heading">Heading</h3>
        <p class="jr-card__p">When designing a card component, these are most common pitfalls to avoid</p>
        <div class="jr-card__button-bar">
          <jr-button width="100%" theme="sm" stretch>< Previous</jr-button>
          <jr-button theme="sm" stretch>Next ></jr-button>
        </div>
        <div class="jr-card__small">
          <small class="jr-card__small__text">By JR Designs</small>
        </div>
      </div>
    `;
  }
}
