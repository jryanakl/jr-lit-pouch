import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

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
      background-color: var(--bk-color);
      color: var(--blue-color);
      font-weight: bold;
    }

    .material-icons {
      display: inline-block;
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
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

    .jr-navbar {
      margin: 0px 5px;
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

    .jr-navbar__li {
      display: flex;
      align-items: center;
      padding: 8px;
    }

    .jr-navbar__link {
      font-size: 14px;
    }

    .jr-navbar__link.active .material-icons {
      color: var(--blue-color);
    }
    
    .jr-navbar__link:hover {
      background-color: var(--bk-color);
      cursor: pointer;
      transition: all 0.5s ease;
    }

    .jr-navbar__link-text {
      margin-left: 0.25rem;
    }
  `

  // Add link event listeners after the initial render
  firstUpdated() {
    if (window?.app?.router) {
      window.app.router.initialize(this.shadowRoot, `a.jr-navbar__link`);
    }
  }

  render() {
    return html`
      <div class="jr-navbar">
        <p class="jr-navbar__header">
          Intro
        </p>
        <ul class="jr-navbar__list">
          <li class="jr-navbar__li">
            <span class="material-icons">chevron_right</span>
            <a class="jr-navbar__link" id="linkIntro" href="/intro">
              <span class="jr-navbar__link-text">Overview</span>
            </a>
          </li>
        </ul>
        <p class="jr-navbar__header">
          Components
        </p>
        <ul class="jr-navbar__list">
          <li class="jr-navbar__li">
            <span class="material-icons">chevron_right</span>
            <a class="jr-navbar__link" id="linkComponents" href="/components">
              <span class="jr-navbar__link-text">Tree Menu</span>
            </a>
          </li>
          <li class="jr-navbar__li">
            <span class="material-icons">chevron_right</span>
            <a class="jr-navbar__link" id="linkComponents" href="/components">
              <span class="jr-navbar__link-text">Table</span>
            </a>
          </li>
          <li class="jr-navbar__li">
            <span class="material-icons">chevron_right</span>
            <a class="jr-navbar__link" id="linkComponents" href="/components">
              <span class="jr-navbar__link-text">Button</span>
            </a>
          </li>
        </ul>
        <p class="jr-navbar__header">
          Data
        </p>
        <ul class="jr-navbar__list">
          <li class="jr-navbar__li">
            <span class="material-icons">chevron_right</span>
            <a class="jr-navbar__link" id="linkData" href="/data">
              <span class="jr-navbar__link-text">PouchDB</span>
            </a>
          </li>
        </ul>
        <p class="jr-navbar__header">
          Tooling
        </p>
        <ul class="jr-navbar__list">
          <li class="jr-navbar__li">
            <span class="jr-navbar__link-icon material-icons">chevron_right</span>
            <a class="jr-navbar__link" id="linkTooling" href="/tooling">
              <span class="jr-navbar__link-text">About</span>
            </a>
          </li>
        </ul>
      </div>
    `;
  }
}
