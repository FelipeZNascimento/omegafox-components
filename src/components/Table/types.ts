export type TTableColumn = {
  id: number;
  align: 'left' | 'center' | 'right';
  flex: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  renderingFunction: () => JSX.Element;
};

export type TTableRowColumn = {
  id: number;
  renderingFunction: () => JSX.Element;
};

export type TTableRow = TTableRowColumn[];

export interface ITableProps {
  isHeader: boolean;
  isLoading?: boolean;
  columns: TTableColumn[];
  rows: TTableRow[];
}
