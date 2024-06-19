import { Box, Typography } from '@mui/material';

type RatePanelBoxUIProps = {
  rate: RateItem;
};

const RatePanelBoxUI = ({ rate }: RatePanelBoxUIProps) => {
  return (
    <Box
      sx={{
        padding: 1,
        width: '33%',
        textAlign: 'center',
        border: '1px solid #777777',
        borderRadius: 1,
      }}
    >
      <Typography variant="body2">{rate.label}</Typography>
      <Typography variant="body1" color="#333333" fontWeight={600}>
        {rate.value}%
      </Typography>
    </Box>
  );
};

export default RatePanelBoxUI;
