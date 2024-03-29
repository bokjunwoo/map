import { Box, ListItem, Stack, Typography } from '@mui/material';
import { formatNumber } from '../../../utils/etc';

type MapCalculateRewardUIProps = {
  label: string;
  rewardValue: number;
  rewardUnit: '경험치' | '메소';
};

const MapCalculateRewardUI = ({
  label,
  rewardValue,
  rewardUnit,
}: MapCalculateRewardUIProps) => {
  return (
    <ListItem sx={{ display: 'block' }}>
      <Box>
        <Typography variant="body1" component="span">
          {label}
        </Typography>
        <Typography variant="body1" component="span" sx={{ pl: 0.5 }}>
          {Math.floor(rewardValue).toLocaleString()}
        </Typography>
      </Box>

      <Box color="text.secondary">
        <Typography
          variant="body1"
          component="span"
          sx={{ visibility: 'hidden' }}
        >
          {label}
        </Typography>
        <Typography variant="body2" component="span" sx={{ pl: 0.5 }}>
          약 {formatNumber(rewardValue, rewardUnit)}
        </Typography>
      </Box>
    </ListItem>
  );
};

export default MapCalculateRewardUI;
