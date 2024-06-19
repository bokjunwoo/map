import { TableRow, TableCell, TableBody } from '@mui/material';

type EmptyTableRowCommonProps = {
  colSpan: number;
  text: string;
};

const EmptyTableRowCommon = ({ colSpan, text }: EmptyTableRowCommonProps) => (
  <TableBody>
    <TableRow>
      <TableCell colSpan={colSpan} sx={{ p: 2 }}>
        {text}
      </TableCell>
    </TableRow>
  </TableBody>
);

export default EmptyTableRowCommon;
