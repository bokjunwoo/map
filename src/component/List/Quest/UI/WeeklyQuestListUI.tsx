import { Box, List, ListItem, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { weeklyQuestExp } from '../../../../data/quest';
import { weeklyQuestMinRegionsLevel } from '../../../../data/region';
import { truncateToFixed } from '../../../../utils/format';
import {
  calculateTotalExpPercentage,
  filterValidRegions,
} from '../../../../utils/quest';
import WeeklyQuestListItemUI from './WeeklyQuestListItemUI';

type Props<T extends AraneRiverWeeklyQuestRegion> = {
  title: string;
  characterLevel: number;
  weeklyQuestsRegions: T[];
  selectedRegions: T[];
  handleCheckboxChange: (region: T, checked: boolean) => void;
};

const WeeklyQuestListUI = <T extends AraneRiverWeeklyQuestRegion>({
  title,
  characterLevel,
  weeklyQuestsRegions,
  selectedRegions,
  handleCheckboxChange,
}: Props<T>) => {
  const validRegions = filterValidRegions(selectedRegions, weeklyQuestsRegions);

  const totalExpPercentage = calculateTotalExpPercentage({
    characterLevel,
    regions: validRegions,
    questExp: weeklyQuestExp,
    minLevelData: weeklyQuestMinRegionsLevel,
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
              ({truncateToFixed(totalExpPercentage, 3)}%)
            </Typography>
          </Box>
        </Box>
      </ListItem>

      {weeklyQuestsRegions.map((region) => (
        <WeeklyQuestListItemUI
          key={region}
          label={region}
          selectedRegions={selectedRegions}
          handleCheckboxChange={handleCheckboxChange}
          regions={weeklyQuestsRegions}
        />
      ))}
    </List>
  );
};

export default WeeklyQuestListUI;
