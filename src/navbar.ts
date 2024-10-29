import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
//import { router } from './main.js';

/**
 * JrNavbar LitElement
 *
 */
@customElement('jr-navbar')
export class JrNavbar extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    
    .active {
      //color: #666666;
      background-color: #212529;
    }

    .jr-navbar {  
    }

    .jr-navbar__header {
      font-weight: 600;
    }

    .jr-navbar__list {
      list-style: none;
      font-weight: 400;
      margin: 0px 0px 0px 1px;
      padding: 0;
    }

    .jr-navbar__list__link {
      font-size: 14px;
      padding: 4px;
      display: flex;
      align-items: center;
    }

    .material-icons {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;
      /* Fallback if the font isn't loading */
      font-feature-settings: 'liga';
      -webkit-font-feature-settings: 'liga';
    }

    .jr-navbar__list__link.active .material-icons {
      color: #007bff; /* Highlight color for the active link */
    }
  `

  render() {
    return html`
      <div class="jr-navbar">
        <p class="jr-navbar__header">
          Components
        </p>
        <ul class="jr-navbar__list">
          <li>
            <a class="jr-navbar__list__link active">
              <span class="material-icons">chevron_right</span>
              <span>Button</span>
            </a>
          </li>
          <li>
            <a class="jr-navbar__list__link">
              <span class="material-icons">chevron_right</span>
              <span>Table</span>
            </a>
          </li>
           <li>
            <a class="jr-navbar__list__link">
              <span class="material-icons">chevron_right</span>
              <span>Tree Menu</span>
            </a>
          </li>
        </ul>
      </div>
    `;
  }
}
