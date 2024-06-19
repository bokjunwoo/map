import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { RGBColor } from '../../../../data/color';

type TableSortHeadUIProps = {
  orderBy: keyof HeadCellInfo;
  order: 'desc' | 'asc';
  createSortHandler: (
    property: keyof HeadCellInfo
  ) => (event: React.MouseEvent<unknown>) => void;
  headCells: HeadCell[];
};

const TableSortHeadUI = ({
  orderBy,
  order,
  createSortHandler,
  headCells,
}: TableSortHeadUIProps) => {
  return (
    <TableHead sx={{ bgcolor: `rgb(${RGBColor.lightGray})` }}>
      <TableRow>
        <TableCell />

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ pr: 0, pl: 0, pt: 2.5, pb: 2.5 }}
          >
            {headCell.disable_sorting ? (
              headCell.label
            ) : (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableSortHeadUI;
