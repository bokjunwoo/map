import { Paper, Table, TableContainer } from '@mui/material';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { localStorageState } from '../../atoms/localStorageState';
import { HeadCellInfo } from '../../interface/headCell';
import MapSortBody from './MapSortBody';
import MapSortHead from './MapSortHead';

type MapTableContainerProps = {
  localStorageKey: string;
  defaultOptionValue: string;
};

const MapTable = ({
  localStorageKey,
  defaultOptionValue,
}: MapTableContainerProps) => {
  const storedValue = useRecoilValue(
    localStorageState({ key: localStorageKey, defaultOptionValue })
  );

  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const [orderBy, setOrderBy] = useState<keyof HeadCellInfo>('map_name');

  return (
    <TableContainer component={Paper}>
      <Table>
        <MapSortHead
          storedValue={storedValue}
          order={order}
          setOrder={setOrder}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
        />

        <MapSortBody
          storedValue={storedValue}
          order={order}
          orderBy={orderBy}
        />
      </Table>
    </TableContainer>
  );
};

export default MapTable;
