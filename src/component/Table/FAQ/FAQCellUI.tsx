import { TableCell, Typography } from '@mui/material';

const FAQCellUI = ({ item }: FAQProps) => {
  return (
    <TableCell component="th" scope="row" sx={{ pl: 0 }}>
      <Typography component="span" sx={{ mr: 0.3 }} fontSize={14}>
        Q{item.id}. {item.question}
      </Typography>
    </TableCell>
  );
};

export default FAQCellUI;
