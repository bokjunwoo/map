import { generateHeadCells } from '../../data/headCell';
import TableSortHeadUI from './UI/TableSortHeadUI';

interface MapSortHeadProps {
  storedValue: string;
  order: 'asc' | 'desc';
  setOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
  orderBy: keyof HeadCellInfo;
  setOrderBy: React.Dispatch<React.SetStateAction<keyof HeadCellInfo>>;
}

const MapSortHead = ({
  storedValue,
  order,
  setOrder,
  orderBy,
  setOrderBy,
}: MapSortHeadProps) => {
  const headCells = generateHeadCells(storedValue);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof HeadCellInfo
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const createSortHandler =
    (property: keyof HeadCellInfo) => (event: React.MouseEvent<unknown>) => {
      handleRequestSort(event, property);
    };

  return (
    <TableSortHeadUI
      orderBy={orderBy}
      order={order}
      createSortHandler={createSortHandler}
      headCells={headCells}
    />
  );
};

export default MapSortHead;
