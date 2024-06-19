import { Typography } from '@mui/material';

type MobInfoTextUIProps = {
  text: string;
  amount: number;
  unit?: string;
};

const MobInfoTextUI = ({ text, amount, unit }: MobInfoTextUIProps) => {
  return (
    <Typography
      sx={{ display: 'block', fontSize: 13 }}
      component="span"
      variant="body2"
      color="text.primary"
    >
      {text}: {Math.floor(amount).toLocaleString()}
      {unit}
    </Typography>
  );
};

export default MobInfoTextUI;
