import { Box, InputAdornment, OutlinedInput, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../../../atoms/userLevelState';
import { REGEX } from '../../../../constants/constants';
import useValidatedInput from '../../../../hooks/useValidatedInput';
import { truncateToFixed } from '../../../../utils/format';
import { calculatePunchkingExpPercentage } from '../../../../utils/quest';

const PunchkingListInputUI = () => {
  const [value, handleChange] = useValidatedInput(REGEX.NUMBER, 2050);

  const characterLevel = useRecoilValue(userLevelState);

  const expPercentage = calculatePunchkingExpPercentage({
    characterLevel,
    score: Number(value),
  });

  return (
    <Box width="100%">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Typography
            component="span"
            variant="body2"
            color={grey[700]}
            fontWeight={500}
            mr={1}
          >
            직접입력
          </Typography>

          <OutlinedInput
            value={value === 0 ? '' : value}
            onChange={handleChange}
            id="score_text"
            endAdornment={
              <InputAdornment position="end">
                <Typography sx={{ fontSize: 14 }}>점</Typography>
              </InputAdornment>
            }
            aria-describedby="score_text"
            inputProps={{
              'aria-label': 'score',
            }}
            sx={{ width: 80, height: 30, fontSize: 14 }}
          />
        </Box>

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

export default PunchkingListInputUI;
