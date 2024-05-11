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
    sx={{ display: 'block', fontSize: 13, mt: 0.2, mb: 0.2 }}
    component="span"
    variant="body2"
    color="text.primary"
  >
    {text} {Math.floor(amount).toLocaleString()}
    {unit}
  </Typography>
);

export default TextAndAmountLocaleStringUI;
