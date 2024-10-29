import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * JrTable LitElement
 *
 */
@customElement('jr-table')
export class JrTable extends LitElement {
  @property()
  buttonText = 'Click me!';

  static headers = ['State', 'Electricity', 'Gas'];
  static rows = [
    ['Kansas', '9.41', '3.12'],
    ['Iowa', '9.56', '3.68'],
    ['Missouri', '9.10', '3.39']
  ];
  static styles = css`
    :host {
    }

    .jr-table {
      width: 100%;
    }

    .jr-table__th, .jr-table__td {
      padding: 0.5rem;
    }

    .jr-table__th-column, .jr-table__th-row {
      font-weight: bold;
    }

    .jr-table__th-column {
      width: 33%;
      background-color: #222;
    }
  `

  render() {
    return html`
      <table class="jr-table">  
        <tbody class="jr-table__tbody">
          <tr class="jr-table__tr">
            ${JrTable.headers.map(header => html`
              <th class="jr-table__th jr-table__th-column" scope="col">${header}</th>
            `)}
          </tr>
          ${JrTable.rows.map(row => html`
            <tr class="jr-table__tr">
              ${row.map(cell => html`<td class="jr-table__td">${cell}</td>`)}
            </tr>
          `)}
        </tbody>
      </table>
    `;
  }
}
