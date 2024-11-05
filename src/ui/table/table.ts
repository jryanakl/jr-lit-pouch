import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { JrTableService } from './services/table.service.js';
import { JrTableSortOrder, JrTableRow, JrTableColumn } from './model/table.types';

import { tableHead } from './directives/table-head.js';
import { tableBody } from './directives/table-body.js';
import { tableFooter } from './directives/table-footer.js';

import { gradientStyles } from '../styles/gradient.styles.js';
import { iconStyles } from '../styles/icon.styles.js';
import { linkStyles } from '../styles/link.styles.js';
import { tableStyles } from '../styles/table.styles.js';
import { typographyStyles } from '../styles/typography.styles.js';

class JrTableComponent extends LitElement {
  sortOrder: JrTableSortOrder = {};

  @property({ type: Array }) columns: JrTableColumn[] = [];
  @property({ type: Array }) rows: JrTableRow[] = [];
  @property({ type: String }) footerContent: string = '';

  static styles = [
    gradientStyles,
    iconStyles,
    linkStyles,
    tableStyles,
    typographyStyles
  ];

  handleIconArrowClick(column: JrTableColumn): void {
    const { updatedRows, updatedSortOrder } = JrTableService.sortTableRows(column, this.rows, this.sortOrder);
    
    this.rows = updatedRows;
    this.sortOrder = updatedSortOrder;

    // Trigger re-render (assuming this is in a Lit component)
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="jr-table--container">
        <table class="jr-table" aria-label="Basic Table">
          ${tableHead(this.columns, this.handleIconArrowClick.bind(this), this.sortOrder)}
          ${tableBody(this.rows)}
          ${tableFooter(this.footerContent)}
        </table>
      </div>
    `;
  }
}

customElements.define('jr-table', JrTableComponent);