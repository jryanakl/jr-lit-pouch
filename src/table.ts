import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * JrTable LitElement
 *
 */
@customElement('jr-table')
export class JrTable extends LitElement {
  @property({ type: Array })
  headers: string[] = [];

  @property({ type: Array })
  rows: Array<string[]> = [];

  static styles = css`
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
      background-color: var(--bk-color);
    }
    .container {
      width: 100%;
    }
  `

  render() {
    return html`
      <section class="container">
        <table class="jr-table">  
          <tbody class="jr-table__tbody">
            <tr class="jr-table__tr">
              ${this.headers.map((header: string, i: number) =>
      html`<th scope="col" key="${i}" class="jr-table__th jr-table__th-column">${header}</th>`
    )}
            </tr>
            ${this.rows.map(row => html`
              <tr class="jr-table__tr">
                ${row.map((cell: string, i: number) =>
      html`<td key="${i}" class="jr-table__td">${cell}</td>`
    )}
              </tr>
            `)}
          </tbody>
        </table>
      </section>
    `;
  }
}
