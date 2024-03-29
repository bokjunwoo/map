import { Typography } from '@mui/material';

const TextAndAmountLocaleStringUI = ({
  text,
  amount,
  unit,
}: {
  text: string;
  amount: number;
  unit?: string;
}) => (
  <Typography
    sx={{ display: 'block' }}
    component="span"
    variant="body2"
    color="text.primary"
  >
    {text} {Math.floor(amount).toLocaleString()}
    {unit}
  </Typography>
);

export default TextAndAmountLocaleStringUI;
