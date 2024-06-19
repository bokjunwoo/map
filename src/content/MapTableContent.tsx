import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { localStorageState } from '../atoms/localStorageState';
import TableUI from '../component/Table/common/TableUI';
import MapSortBody from '../component/Table/Map/MapSortBody';
import MapSortHead from '../component/Table/Map/MapSortHead';

type MapTableContentProps = {
  localStorageKey: string;
  defaultOptionValue: string;
};

const MapTableContent = ({
  localStorageKey,
  defaultOptionValue,
}: MapTableContentProps) => {
  const storedValue = useRecoilValue(
    localStorageState({ key: localStorageKey, defaultOptionValue })
  );

  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const [orderBy, setOrderBy] = useState<keyof HeadCellInfo>('map_name');

  return (
    <TableUI
      ariaLabel="map_table"
      minWidth={800}
      sx={{ border: '1px solid #e0e0e0' }}
    >
      <MapSortHead
        storedValue={storedValue}
        order={order}
        setOrder={setOrder}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
      />

      <MapSortBody storedValue={storedValue} order={order} orderBy={orderBy} />
    </TableUI>
  );
};

export default MapTableContent;
