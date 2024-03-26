import { Typography } from '@mui/material';

const SecondaryTextUI = ({ text }: { text: string }) => (
  <Typography
    sx={{ display: 'block' }}
    component="span"
    variant="body2"
    color="text.primary"
  >
    {text}
  </Typography>
);

export default SecondaryTextUI;
