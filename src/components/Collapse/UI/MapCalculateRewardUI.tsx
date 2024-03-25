import { Box, ListItem, ListItemText, Typography } from '@mui/material';
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
    <ListItem>
      <ListItemText
        primary={
          <Box sx={{ display: 'flex' }}>
            <Typography variant="body1">{label}</Typography>
            <Typography variant="body1" sx={{ pl: 0.5 }}>
              {rewardValue.toLocaleString()}
            </Typography>
          </Box>
        }
        secondary={
          <Box sx={{ display: 'flex' }}>
            <Typography variant="body1" sx={{ visibility: 'hidden' }}>
              {label}
            </Typography>
            <Typography variant="body2" sx={{ pl: 0.5 }}>
              약 {formatNumber(rewardValue, rewardUnit)}
            </Typography>
          </Box>
        }
      ></ListItemText>
    </ListItem>
  );
};

export default MapCalculateRewardUI;
