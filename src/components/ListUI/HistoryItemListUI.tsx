import { Typography } from '@mui/material';

type HistoryItemListUIProps = {
  item: string;
};

const HistoryItemListUI = ({ item }: HistoryItemListUIProps) => {
  return (
    <Typography
      component="span"
      variant="body2"
      color="text.secondary"
      sx={{ display: 'block' }}
    >
      • {item}
    </Typography>
  );
};

export default HistoryItemListUI;
