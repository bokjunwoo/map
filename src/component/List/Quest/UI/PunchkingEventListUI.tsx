import { List, ListItem, Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { punchkingScore } from '../../../../data/quest';
import useRadio from '../../../../hooks/useRadio';
import { extractValue, truncateToFixed } from '../../../../utils/format';
import { calculatePunchkingExpPercentage } from '../../../../utils/quest';
import PunchkingEventListItemInputUI from './PunchkingEventListItemInputUI';
import PunchkingEventListItemUI from './PunchkingEventListItemUI';

type Props = {
  title: string;
  characterLevel: number;
};

const PunchkingEventListUI = ({ title, characterLevel }: Props) => {
  const [selectedValue, handleChange] = useRadio('1000점');

  const expPercentage = calculatePunchkingExpPercentage({
    characterLevel,
    score: extractValue(selectedValue),
  });

  return (
    <List sx={{ py: 0.5 }}>
      <ListItem
        sx={{
          px: 1.5,
          py: 0.5,
          border: `1px solid ${grey[400]}`,
          borderRadius: 1,
          bgcolor: grey[500],
        }}
      >
        <Box width="100%" py={0.5}>
          <Typography
            variant="h6"
            fontSize={18}
            color="white"
            fontWeight="bold"
          >
            {title}
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Typography
              component="span"
              variant="body2"
              fontWeight={500}
              color="#ffff00"
            >
              경험치 획득 시 총합
            </Typography>
            <Typography
              component="span"
              variant="body2"
              fontWeight={500}
              color="#ffff00"
            >
              ({truncateToFixed(expPercentage, 3)}%)
            </Typography>
          </Box>
        </Box>
      </ListItem>

      <PunchkingEventListItemInputUI
        selectedValue={selectedValue}
        handleChange={handleChange}
      />

      {punchkingScore.map((score) => (
        <PunchkingEventListItemUI
          key={score}
          label={score}
          selectedValue={selectedValue}
          handleChange={handleChange}
        />
      ))}
    </List>
  );
};

export default PunchkingEventListUI;
