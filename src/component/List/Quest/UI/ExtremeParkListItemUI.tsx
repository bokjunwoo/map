import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../../../atoms/userLevelState';
import { extremeParkExp } from '../../../../data/quest';
import { calculateExpPercentage } from '../../../../utils/calculate';
import { truncateToFixed } from '../../../../utils/format';

type Props = {
  label: ExtremeParkRegion;
  isObtainable: boolean;
  expValue: number;
};

const ExtremeParkListItemUI = ({ label, isObtainable, expValue }: Props) => {
  const characterLevel = useRecoilValue(userLevelState);

  const expPercentage = calculateExpPercentage({
    userLevel: characterLevel,
    expReward: extremeParkExp[characterLevel],
  });

  if (isObtainable) {
    return (
      <Box width="100%">
        <Box display="flex" justifyContent="space-between">
          <Typography
            component="span"
            variant="body2"
            color={grey[700]}
            fontWeight={500}
          >
            {label}
          </Typography>
          <Typography
            component="span"
            variant="body2"
            color="textSecondary"
            fontWeight={500}
          >
            ({truncateToFixed(expPercentage, 3)}%)
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box width="100%">
      <Box display="flex" justifyContent="space-between">
        <Typography
          component="span"
          variant="body2"
          color={grey[700]}
          fontWeight={500}
        >
          {label}
        </Typography>
        <Typography
          component="span"
          variant="body2"
          color="textSecondary"
          fontWeight={500}
        >
          획득불가
        </Typography>
      </Box>
    </Box>
  );
};

export default ExtremeParkListItemUI;
