import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('jr-table')
export class JrTable extends LitElement {
  @property({ type: Array }) headers: string[] = [];
  @property({ type: Array }) rows: Array<string[]> = [];

  static styles = css`
    .jr-table {
      font-size: 14px;
      width: 100%;
    }

    .jr-table__th, .jr-table__td {
      padding: 0.5rem;
    }

    .jr-table__th-column {
      font-weight: bold;
      background-color: var(--background-color);
    }

    @media (max-width: 600px) {
      .jr-table {
        display: block;
        overflow-x: auto;
      }
    }
  `;

  render() {
    if (this.rows.length === 0) {
      return html`<p>No data available.</p>`;
    }

    return html`
      <table class="jr-table" aria-label="Data table showing information about energy usage">
        <thead>
          <tr class="jr-table__tr">
            ${this.headers.map((header: string, i: number) =>
              html`<th key="${i}" scope="col" class="jr-table__th jr-table__th-column">${header}</th>`
            )}
          </tr>
        </thead>
        <tbody class="jr-table__tbody">
          ${this.rows.map(row => html`
            <tr class="jr-table__tr">
              ${row.map((cell: string) =>
                html`<td class="jr-table__td">${cell}</td>`
              )}
            </tr>
          `)}
        </tbody>
      </table>
    `;
  }
}
