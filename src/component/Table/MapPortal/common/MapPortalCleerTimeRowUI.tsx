import { TableCell, TableRow } from '@mui/material';
import MapPortalPlayTimeButtonUI from '../../../Input/Map/UI/MapPortalPlayTimeButtonUI';
import TableThCellUI from '../../common/TableThCellUI';

const MapPortalCleerTimeRowUI = ({ portalTypeList }: PortalTypeListProps) => {
  return (
    <TableRow>
      <TableThCellUI align="center" p={0}>
        클리어 타임
      </TableThCellUI>

      {portalTypeList.map(
        ({ label, initialPlayTime, playTime, increment, decrement }) => (
          <TableCell key={label} sx={{ p: 0 }}>
            <MapPortalPlayTimeButtonUI
              initialPlayTime={initialPlayTime}
              count={playTime}
              increment={increment}
              decrement={decrement}
            />
          </TableCell>
        )
      )}
    </TableRow>
  );
};

export default MapPortalCleerTimeRowUI;
