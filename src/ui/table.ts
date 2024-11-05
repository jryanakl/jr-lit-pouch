import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { gradientStyles } from './styles/gradient.styles.js';
import { iconStyles } from './styles/icon.styles.js';

type SortOrderType = JrGridType['SortOrder']['ASCENDING'] | 
                     JrGridType['SortOrder']['DESCENDING'] | 
                     JrGridType['SortOrder']['NONE'] | 
                     JrGridType['SortOrder']['OTHER'];
type JrGridType = {
  CSSClass: {},
  GridSelector: {
    ROW?: string;
    CELL?: string;
  },
  SortOrder: {
    ASCENDING?: string;
    DESCENDING?: string;
    NONE?: string;
    OTHER?: string;
  },
};

// Initialize
const jrGrid: JrGridType = {
  CSSClass: {},
  GridSelector: {},
  SortOrder: {},
};

// Define Properties
jrGrid.CSSClass = {
  HIDDEN: 'hidden',
};
jrGrid.GridSelector = {
  ROW: '.jr-table__tbody .jr-table__tr, [role="row"]',
  CELL: 'th, td, [role="gridcell"]',
};
jrGrid.SortOrder = {
  ASCENDING: 'ascending',
  DESCENDING: 'descending',
};


interface TableRow {
  [key: string]: string | number;
}

@customElement('jr-table')
export class JrTable extends LitElement {
  @property({ type: Array }) headers: string[] = [];
  @property({ type: Array }) rows: Array<string[]> = [];
  @state() private sortedRows: TableRow[] = [];

  private sortOrder: SortOrderType;

  constructor() {
    super();
    console.log('sortOrder', this.sortOrder);
    this.sortOrder = jrGrid.SortOrder.ASCENDING;
  }
  
  connectedCallback() {
    super.connectedCallback();
    // Initialize sorted rows
    this.sortedRows = [];
  }
  
  static styles = [
    gradientStyles,
    iconStyles,
    css`
      .jr-table {
        border: 1px solid var(--border-color-default);
        font-size: var(--base-font-size);
        width: 100%;
      }

      .jr-table--clickable {
        cursor: pointer;
      }
      
      .jr-table__thead .jr-table__tr {
        width: 100%;
      }
      
      .jr-table__thead .jr-table__th {
        text-align: left;
        border: 1px solid var(--border-color-default);
        padding: 0.5rem;
      }

      .jr-table__th-text {
        color: var(--text-color-lightest);
      }

      .jr-table__tbody .jr-table__tr .jr-table__td {
        padding: 0.5rem;
        /* background-color: var(--background-color); */
        background-color: rgba(255, 255, 255, 0.025); /* Replace with your color and 0.5 for 50% transparency */
      }

      .jr-table__th.jr-table__th-column {
        justify-content: space-around;
        font-weight: bold;
        /* background-color: var(--background-color); */
      }

      .jr-table__td-text {
        color: var(--text-color-lighter);
      }

      @media (max-width: 600px) {
        .jr-table {
          display: block;
          overflow-x: auto;
        }
      }
    `
  ];

  private toggleSortOrder(): SortOrderType {
     const sortOrder = (this.sortOrder === jrGrid.SortOrder.ASCENDING) ? 
                        jrGrid.SortOrder.DESCENDING : 
                        jrGrid.SortOrder.ASCENDING;
    return sortOrder;
  }
  
  public handleIconArrowClick(e: Event) {
    // Toggle sort order
    this.sortOrder = this.toggleSortOrder();
    let columnKey: string;

    if ((e.currentTarget as HTMLElement)?.parentElement) {
      let trElement = (e.currentTarget as HTMLElement)?.parentElement;
      let trElementAttrs = trElement?.attributes;

      console.log('trElement', trElement);
      console.log('trElementAttrs', trElementAttrs);
      columnKey = `0`;
    }

    // Sort rows based on column and order
    // this.sortedRows = [...this.rows].sort((a, b) => {
    //   const aValue = a[columnKey];
    //   const bValue = b[columnKey];
    //   const isAsc = this.sortOrder === 'asc';

    //   if (typeof aValue === 'number' && typeof bValue === 'number') {
    //     return isAsc ? aValue - bValue : bValue - aValue;
    //   } else {
    //     return isAsc
    //       ? String(aValue).localeCompare(String(bValue))
    //       : String(bValue).localeCompare(String(aValue));
    //   }
    // });

    // Log for debugging
    // console.log('Sorted rows:', this.sortedRows);
  }

  render() {
    if (this.rows.length === 0) {
      return html`<p>No data available.</p>`;
    }

    return html`
      <table class="jr-table" aria-label="Data table showing information about energy usage">
        <thead class="jr-table__thead jr-gradient--linear">
          <tr class="jr-table__tr jr-gradient--linear">
            ${this.headers.map((header: string, i: number) =>
              html`
               <th key="${i}" scope="col" class="jr-table__th jr-table__th-column"
                   data-aria-sort="${ifDefined(this.sortOrder)}">
                 <span class="jr-table__th-text">${header}</span>
                 <a @click="${(e: Event) => this.handleIconArrowClick(e)}" class="material-icons jr-table--clickable">arrow_drop_down</a>
               </th>
               `
            )}
          </tr>
        </thead>
        <tbody class="jr-table__tbody">
        ${this.rows.map((row) => html`
            <tr class="jr-table__tr" role="row">
              ${row.map((cell: string) =>
                html`<td class="jr-table__td" role="gridcell">${cell}</td>`
              )}
            </tr>
          `)}
        </tbody>
      </table>
    `;
  }
}
