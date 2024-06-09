import { TableContainer, Table, TableProps } from '@mui/material';
import { ReactNode } from 'react';

type TableUIProps = {
  ariaLabel: string;
  children: ReactNode;
  sx?: TableProps['sx'];
  minWidth?: number;
};

const TableUI = ({ ariaLabel, children, sx, minWidth }: TableUIProps) => {
  return (
    <TableContainer>
      <Table
        sx={{
          th: { fontWeight: 500 },
          td: { fontSize: 13 },
          minWidth: minWidth,
          ...sx,
        }}
        size="small"
        aria-label={ariaLabel}
      >
        {children}
      </Table>
    </TableContainer>
  );
};

export default TableUI;
