import { TableRow, TableCell } from '@mui/material';
import PortalSelectUI from '../../../common/Input/PortalSelectUI';
import TableThCellUI from '../../common/TableThCellUI';

const MapPortalSelectRowUI = ({ portalTypeList }: PortalTypeListProps) => {
  return (
    <TableRow>
      <TableThCellUI align="center" p={0}>
        설정
      </TableThCellUI>

      {portalTypeList.map(
        ({ label, expMultiplier, menuItem, expMultiplierChange, menuText }) => (
          <TableCell key={label} sx={{ p: 0 }} align="center">
            {menuItem && expMultiplierChange ? (
              <PortalSelectUI
                selectedValue={expMultiplier}
                menuItem={menuItem}
                handleChange={expMultiplierChange}
              />
            ) : (
              menuText
            )}
          </TableCell>
        )
      )}
    </TableRow>
  );
};

export default MapPortalSelectRowUI;
