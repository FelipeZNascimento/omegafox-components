import { IRankingProps, TRankingRow } from './types';
const singleRow: TRankingRow = [
  { id: 0, renderingFunction: () => <div>01.</div> },
  {
    id: 1,
    renderingFunction: () => <div>Felipe Zanon Felipe Zanon Felipe Zanon</div>
  },
  { id: 2, renderingFunction: () => <div>999</div> }
];

export const tableConfig: IRankingProps = {
  isHeader: true,
  columns: [
    {
      id: 0,
      align: 'left',
      flex: 1,
      renderingFunction: () => <div>Pos</div>
    },
    {
      id: 1,
      align: 'left',
      flex: 4,
      renderingFunction: () => <div>Nome</div>
    },
    {
      id: 2,
      align: 'right',
      flex: 1,
      renderingFunction: () => <div>Pts.</div>
    }
  ],
  rows: [singleRow, singleRow, singleRow, singleRow, singleRow, singleRow]
};
