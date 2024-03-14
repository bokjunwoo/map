import { useState } from 'react';
import { generateHeadCells } from '../../data/headCell';
import { HeadCellInfo } from '../../interface/headCell';
import TableSortHeadUI from './UI/TableSortHeadUI';

const MapSortHead = ({ storedValue }: { storedValue: string }) => {
  const headCells = generateHeadCells(storedValue);

  const [orderBy, setOrderBy] = useState<keyof HeadCellInfo>('map_name');
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');

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
