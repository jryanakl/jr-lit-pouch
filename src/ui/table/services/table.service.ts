import { JrTableRow, JrTableSortOrder, JrTableColumn } from '../model/table.types';

export class JrTableService {
  
    static sortTableRows(column: JrTableColumn,
                        rows: JrTableRow[],
                        sortOrder: JrTableSortOrder): { updatedRows: JrTableRow[]; updatedSortOrder: JrTableSortOrder } {

      const newSortOrder = { ...sortOrder, [column.index]: !sortOrder[column.index] };
      const updatedRows: JrTableRow[] = this.sortByAsceDesc([...rows], column, newSortOrder);

      return {
        updatedRows,
        updatedSortOrder: newSortOrder
      };
    }

  static sortByAsceDesc(rows: JrTableRow[],
                        column: JrTableColumn,
                        newSortOrder: JrTableSortOrder): JrTableRow[] {
    let _sortedRows: JrTableRow[] = [];

    if (rows?.length) {
      _sortedRows = rows.sort((a, b) => {
        const aVal = a[column.key];
        const bVal = b[column.key];
  
        if (aVal < bVal) return newSortOrder[column.index] ? -1 : 1;
        if (aVal > bVal) return newSortOrder[column.index] ? 1 : -1;
  
        return 0;
      });
      _sortedRows;
    }

    return _sortedRows;
  }
}
