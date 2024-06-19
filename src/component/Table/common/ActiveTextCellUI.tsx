import { TableCell } from '@mui/material';

type ActiveTextCellUIProps = {
  value: number;
  activeCell: number;
  onCellClick: (columnIndex: number) => void;
  text: string;
};

const ActiveTextCellUI = ({
  value,
  activeCell,
  onCellClick,
  text,
}: ActiveTextCellUIProps) => {
  return (
    <TableCell
      align="center"
      sx={{
        bgcolor: activeCell === value ? '#FFFFCC' : '',
        cursor: 'pointer',
      }}
      onClick={() => onCellClick(value)}
    >
      {text}
    </TableCell>
  );
};

export default ActiveTextCellUI;
