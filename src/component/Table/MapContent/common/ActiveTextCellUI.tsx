import { TableCell, Typography } from '@mui/material';

type ActiveTextCellUIProps = {
  item: ExpRewardOption;
  columnWidth: number;
};

const ActiveTextCellUI = ({ item, columnWidth }: ActiveTextCellUIProps) => {
  return (
    <TableCell
      width={columnWidth}
      align="center"
      sx={{
        bgcolor: item.activeCell === item.runeValue ? '#FFFFCC' : '',
        cursor: 'pointer',
      }}
      onClick={() => item.onCellClick(item.runeValue)}
    >
      <Typography fontSize={14} fontWeight={500}>
        {item.runeLabel}
      </Typography>
    </TableCell>
  );
};

export default ActiveTextCellUI;
