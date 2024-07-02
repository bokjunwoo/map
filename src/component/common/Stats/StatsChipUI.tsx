import { Avatar, Box, Typography } from '@mui/material';
import StatsChipStyle from './style/StatsChipStyle';

type StatsChipUIProps = {
  rateList: RateListOption;
};

const StatsChipUI = ({ rateList }: StatsChipUIProps) => {
  return (
    <Box sx={{ width: 100 }}>
      <Box
        sx={{
          textAlign: 'center',
          bgcolor: rateList.bgcolor,
          p: 0.5,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        }}
      >
        <Typography variant="body2" sx={{ fontSize: 12 }}>
          {rateList.text}
        </Typography>
      </Box>

      <StatsChipStyle
        sx={{
          border: `1px solid ${rateList.bgcolor}`,
          bgcolor: '#FFFFFF',
        }}
        avatar={
          <Avatar
            alt={rateList.iconName}
            src={require(`../../../assets/etc_icon/${rateList.iconName}.png`)}
            variant="rounded"
          />
        }
        label={`+ ${rateList.value}%`}
        size="small"
      />
    </Box>
  );
};

export default StatsChipUI;
