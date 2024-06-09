import { TableRow } from '@mui/material';
import { ReactNode } from 'react';

type TableRowUIProps = {
  hover: boolean;
  open: boolean;
  children: ReactNode;
  bgColor?: string;
};

const TableRowUI = ({ hover, open, children, bgColor }: TableRowUIProps) => {
  return (
    <TableRow
      hover={hover}
      sx={{ '& > *': { borderBottom: open ? 'none' : '' }, bgcolor: bgColor }}
    >
      {children}
    </TableRow>
  );
};

export default TableRowUI;
