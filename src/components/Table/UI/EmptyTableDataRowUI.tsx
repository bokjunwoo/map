import { TableRow, TableCell } from '@mui/material';

const EmptyTableDataRowUI = ({
  colSpan,
  text,
}: {
  colSpan: number;
  text: string;
}) => (
  <TableRow>
    <TableCell colSpan={colSpan}>
      <span>{text}</span>
    </TableCell>
  </TableRow>
);

export default EmptyTableDataRowUI;
