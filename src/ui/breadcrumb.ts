import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * JrBreadIcon LitElement
 */
@customElement('jr-bread-icon')
export class JrBreadIcon extends LitElement {
  render() {
    return html`&nbsp;>&nbsp;`;
  }
}


/**
 * JrBreadcrumb LitElement
 */
@customElement('jr-breadcrumb')
export class JrBreadcrumb extends LitElement {
  static styles = css`
    :host {
      /* --card-box-shadow: 0 0 0 0.25rem; */
    }
    
    .jr-breadcrumb {
      display: flex;
      list-style: none;
    }

    .jr-breadcrumb__link {
      font-size: 15px;
      text-decoration: none;
      color: var(--primary-blue);
    }

    .jr-breadcrumb__link:hover {
      color: var(--lightest-blue);
      cursor: pointer;
      text-decoration: underline;
      transition: all 0.5s ease;
    }

    .jr-breadcrumb__link--hover {
    }

    .jr-breadcrumb__link--focus {
    }
    
    .jr-breadcrumb__link--selected {
    }
  `;

  render() {
    return html`
      <ul class="jr-breadcrumb" aria-label="Card">
        <li><a class="jr-breadcrumb__link" href="">Home</a><jr-bread-icon></jr-bread-icon></li>
        <li><a class="jr-breadcrumb__link" href="">Resource</a></li>
      </ul>
    `;
  }
}
