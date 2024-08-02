import { Box, Typography } from '@mui/material';
import { grey, red } from '@mui/material/colors';
import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../../../atoms/userLevelState';
import { calculateExpPercentage } from '../../../../utils/calculate';
import { truncateToFixed } from '../../../../utils/format';

type Props<T extends QuestRegion> = {
  label: T;
  questExp: { [key in T]: number };
  nearestRegion: QuestRegion;
  isObtainable: boolean;
  error: boolean;
};

const QuestStatusListTextUI = <T extends QuestRegion>({
  label,
  questExp,
  nearestRegion,
  isObtainable,
  error,
}: Props<T>) => {
  const characterLevel = useRecoilValue(userLevelState);

  const expPercentage = calculateExpPercentage({
    userLevel: characterLevel,
    expReward: questExp[label],
  });

  const primaryText = isObtainable ? (
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
  ) : (
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
        (획득불가)
      </Typography>
    </Box>
  );

  return (
    <Box width="100%">
      {primaryText}
      {error && isObtainable && (
        <Typography
          variant="body2"
          color={red[400]}
          fontSize={10}
        >{`${nearestRegion}에서 사냥 경험치가 더 좋습니다.`}</Typography>
      )}
    </Box>
  );
};

export default QuestStatusListTextUI;
