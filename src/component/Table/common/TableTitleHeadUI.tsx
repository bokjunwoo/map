import { TableCell, TableHead, TableRow } from '@mui/material';

type TableTitleHeadUIProps = {
  title: string;
};

const TableTitleHeadUI = ({ title }: TableTitleHeadUIProps) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{ pl: 0, fontSize: 18 }} colSpan={2}>
          {title}
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableTitleHeadUI;
