import { TableHead, TableRow, Typography } from '@mui/material';
import TableThCellUI from '../../common/TableThCellUI';

const MapPortalHeadUI = ({ portalTypeList }: PortalTypeListProps) => {
  const columnWidth = (100 - 13) / portalTypeList.length;

  return (
    <TableHead>
      <TableRow>
        <TableThCellUI align="center" width="13%" />

        {portalTypeList.map(({ label }) => (
          <TableThCellUI key={label} width={`${columnWidth}%`} align="center">
            <Typography fontSize={14} fontWeight={500}>
              {label}
            </Typography>
          </TableThCellUI>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default MapPortalHeadUI;
