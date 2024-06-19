import { TableCell, TableRow } from '@mui/material';
import UpDownButtonUI from '../../../../components/common/UpDownButtonUI';
import TableThCellUI from '../../common/TableThCellUI';

const MapPortalCleerTimeRowUI = ({ portalTypeList }: PortalTypeListProps) => {
  return (
    <TableRow>
      <TableThCellUI align="center" p={0}>
        클리어 타임
      </TableThCellUI>

      {portalTypeList.map(({ label, playTime, increment, decrement }) => (
        <TableCell key={label} sx={{ p: 0 }}>
          <UpDownButtonUI
            initialValue={playTime}
            count={playTime}
            increment={increment}
            decrement={decrement}
          />
        </TableCell>
      ))}
    </TableRow>
  );
};

export default MapPortalCleerTimeRowUI;
