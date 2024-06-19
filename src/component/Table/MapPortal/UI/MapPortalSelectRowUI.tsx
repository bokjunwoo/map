import { TableRow, TableCell } from '@mui/material';
import PortalSelectUI from '../../../common/Input/PortalSelectUI';
import TableThCellUI from '../../common/TableThCellUI';

const MapPortalSelectRowUI = ({
  portalSelectTypeList,
}: PortalSelectTypeListProps) => {
  return (
    <TableRow>
      <TableThCellUI align="center" p={0}>
        설정
      </TableThCellUI>

      {portalSelectTypeList.map(
        ({ label, initialExpMultiplier, menuItem, handleChange, text }) => (
          <TableCell key={label} sx={{ p: 0 }} align="center">
            {menuItem && handleChange ? (
              <PortalSelectUI
                selectedValue={initialExpMultiplier}
                menuItem={menuItem}
                handleChange={handleChange}
              />
            ) : (
              text
            )}
          </TableCell>
        )
      )}
    </TableRow>
  );
};

export default MapPortalSelectRowUI;
