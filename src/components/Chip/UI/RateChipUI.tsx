import { Chip, Avatar, Box, Typography } from '@mui/material';
import { RateListOption } from '../../../interface/stats';

type RateChipUIProps = {
  rateList: RateListOption;
};

const RateChipUI = ({ rateList }: RateChipUIProps) => {
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

      <Chip
        component="span"
        sx={{
          display: 'flex',
          fontSize: '0.7rem',
          fontWeight: 600,
          height: 25,
          bgcolor: 'white',
          border: `1px solid ${rateList.bgcolor}`,
          borderRadius: 0,
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          '.MuiChip-label': {
            pr: '4px',
          },
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

export default RateChipUI;
