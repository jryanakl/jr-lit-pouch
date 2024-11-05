import { html, TemplateResult } from 'lit';
import { JrTableColumn, JrTableSortOrder } from '../model/table.types';


const tableHeadCell = (column: JrTableColumn,
                       onClick: (column: JrTableColumn) => void,
                       sortOrder: JrTableSortOrder): TemplateResult => {
  const isAscending = sortOrder[column.index] ?? false;
  const icon = isAscending ? 'arrow_drop_up' : 'arrow_drop_down';

  return html`
    <th class="jr-table-head-cell">
      <div class="jr-table-head-cell__container">
        <span class="jr-table-head-cell__column">
          ${column.title}
        </span>
        <a @click="${() => onClick(column)}" 
           class="jr-table-head-cell__link material-icons jr-table--clickable">
          ${icon}
        </a>
      </div>
    </th>
  `;
}

const tableHeadRow = (columns: JrTableColumn[], 
                      onClick: (column: JrTableColumn) => void, 
                      sortOrder: JrTableSortOrder): TemplateResult => {
  return html`
    <tr class="jr-table-head-row">
      ${columns.map((column) => tableHeadCell(column, onClick, sortOrder))}
    </tr>
  `;
}


export const tableHead = (columns: JrTableColumn[],
                          onClick: (column: JrTableColumn) => void,
                          sortOrder: JrTableSortOrder) => { 
  return html`
    <thead class="jr-table-head">
      ${tableHeadRow(columns, onClick, sortOrder)}
    </thead>
  `;
}
