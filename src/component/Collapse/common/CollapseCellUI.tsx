import { Collapse, TableCell, TableRow } from '@mui/material';
import { ReactNode } from 'react';

type CollapseCellUIProps = {
  open: boolean;
  colSpan: number;
  children: ReactNode;
  bgColor?: string;
};

const CollapseCellUI = ({
  open,
  colSpan,
  children,
  bgColor,
}: CollapseCellUIProps) => {
  return (
    <TableRow sx={{ bgcolor: bgColor }}>
      <TableCell
        sx={{
          paddingBottom: 0,
          paddingTop: 0,
          borderBottom: open ? '' : 'none',
        }}
        colSpan={colSpan}
      >
        <Collapse in={open} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default CollapseCellUI;
