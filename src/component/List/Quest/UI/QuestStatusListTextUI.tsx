import { Box, ListItemText, Typography } from '@mui/material';
import { grey, red } from '@mui/material/colors';
import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../../../atoms/userLevelState';
import { dailyQuestExp } from '../../../../data/quest';
import { calculateExpPercentage } from '../../../../utils/calculate';
import { truncateToFixed } from '../../../../utils/format';

type Props<T extends QuestRegion> = {
  label: T;
  nearestRegion: QuestRegion;
  isObtainable: boolean;
  error: boolean;
};

const QuestStatusListTextUI = <T extends QuestRegion>({
  label,
  nearestRegion,
  isObtainable,
  error,
}: Props<T>) => {
  const characterLevel = useRecoilValue(userLevelState);

  const expPercentage = calculateExpPercentage({
    userLevel: characterLevel,
    expReward: dailyQuestExp[label],
  });

  const primaryText = isObtainable ? (
    <Box display="flex">
      <Typography
        component="span"
        variant="body2"
        flexGrow={1}
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
    <Box display="flex">
      <Typography
        component="span"
        variant="body2"
        flexGrow={1}
        color={grey[700]}
      >
        {label}
      </Typography>
      <Typography component="span" variant="body2" color="textSecondary">
        (획득불가)
      </Typography>
    </Box>
  );

  return (
    <ListItemText
      sx={error ? { ml: -4, pt: -1 } : {}}
      primary={primaryText}
      primaryTypographyProps={{ fontSize: 14 }}
      secondary={
        error &&
        isObtainable &&
        `${nearestRegion}에서 사냥 경험치가 더 좋습니다.`
      }
      secondaryTypographyProps={{ fontSize: 10, color: red[400] }}
    />
  );
};

export default QuestStatusListTextUI;
