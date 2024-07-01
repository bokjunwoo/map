import { TableCell, TableCellProps } from '@mui/material';
import { ReactNode } from 'react';

type TableThCellUIProps = {
  width?: string;
  align?: TableCellProps['align'];
  p?: number | string;
  children?: ReactNode;
};

const TableThCellUI = ({ align, p, width, children }: TableThCellUIProps) => {
  return (
    <TableCell
      component="th"
      scope="row"
      sx={{ bgcolor: '#F5F5F5', p: p }}
      width={width}
      align={align}
    >
      {children}
    </TableCell>
  );
};

export default TableThCellUI;
