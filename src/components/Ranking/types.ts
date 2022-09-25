export type TRankingColumn = {
  id: number;
  align: 'left' | 'center' | 'right';
  flex: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  renderingFunction: () => JSX.Element;
};

export type TRankingRowColumn = {
  id: number;
  renderingFunction: () => JSX.Element;
};

export type TRankingRow = TRankingRowColumn[];

export interface IRankingProps {
  backgroundImage?: string;
  isHeader: boolean;
  isLoading?: boolean;
  columns: TRankingColumn[];
  rows: TRankingRow[];
}
