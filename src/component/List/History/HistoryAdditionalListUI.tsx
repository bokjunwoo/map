import { Typography } from '@mui/material';

type HistoryAdditionalListUIProps = {
  text: string;
};

const HistoryAdditionalListUI = ({ text }: HistoryAdditionalListUIProps) => {
  return (
    <Typography
      component="span"
      variant="body2"
      color="text.secondary"
      sx={{ display: 'block' }}
    >
      • {text}
    </Typography>
  );
};

export default HistoryAdditionalListUI;
