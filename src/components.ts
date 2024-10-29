import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * JrComponents LitElement
 *
 */
@customElement('jr-components')
export class JrComponents extends LitElement {
  static styles = css`
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
  `

  render() {
    return html`
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
}
