import { html } from 'lit';
import { JrTableRow } from '../model/table.types';

const tableBodyRow = (row: JrTableRow) => html`
  <tr class="jr-table-body-row" role="row">
    ${Object.values(row).map(cell => tableBodyCell(cell))}
  </tr>
`;

const tableBodyCell = (cell: unknown) => html`
  <td class="jr-table-body-cell">
    ${cell}
  </td>
`;

export const tableBody = (rows: JrTableRow[]) => html`
  <tbody class="jr-table-body">
    ${rows.map(row => tableBodyRow(row))}
  </tbody>
`;
