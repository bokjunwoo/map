import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../../../atoms/userLevelState';
import { extractValue, truncateToFixed } from '../../../../utils/format';
import { calculatePunchkingExpPercentage } from '../../../../utils/quest';

type Props = {
  label: PunchkingScoreLabel;
};

const PunchkingListTextUI = ({ label }: Props) => {
  const characterLevel = useRecoilValue(userLevelState);

  const expPercentage = calculatePunchkingExpPercentage({
    characterLevel,
    score: extractValue(label),
  });

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
};

export default PunchkingListTextUI;
