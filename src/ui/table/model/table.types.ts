export interface JrTableData {
  rows: JrTableRow[];
  sortOrder?: JrTableSortOrder;
  columns: JrTableColumn[];
}

export interface JrTableColumn {
  key: keyof JrTableRow;
  title: string;
  index: number;
  isSortable: boolean;
}

export type JrTableSortOrder = Record<number, boolean | undefined>;

export interface JrTableRow {
  name: string;
  value: number;
  date: Date;
}
