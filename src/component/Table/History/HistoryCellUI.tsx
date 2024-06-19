import { TableCell, Typography, Chip } from '@mui/material';

const HistoryCellUI = ({ item }: HistoryProps) => {
  return (
    <TableCell component="th" scope="row" sx={{ pl: 0 }}>
      <Typography component="span" sx={{ mr: 0.3 }}>
        {item.date}
      </Typography>
      <Chip
        component="span"
        label={`ver. ${item.version}`}
        sx={{
          height: 16,
          fontSize: 12,
          '.MuiChip-label': {
            pr: 1,
            pl: 1,
          },
        }}
      />
    </TableCell>
  );
};

export default HistoryCellUI;
