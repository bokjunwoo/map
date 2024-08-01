import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { dailyQuestExp } from '../../../../data/quest';
import { dailyQuestMinRegionsLevel } from '../../../../data/region';
import { truncateToFixed } from '../../../../utils/format';
import {
  calculateTotalExpPercentage,
  filterValidRegions,
} from '../../../../utils/quest';
import QuestListItemUI from './QuestListItemUI';

type Props<T extends QuestRegion> = {
  title: string;
  characterLevel: number;
  dailyQuestRegions: T[];
  selectedRegions: T[];
  handleCheckboxChange: (region: T, checked: boolean) => void;
};

const QuestListUI = <T extends QuestRegion>({
  title,
  characterLevel,
  dailyQuestRegions,
  selectedRegions,
  handleCheckboxChange,
}: Props<T>) => {
  const validRegions = filterValidRegions(selectedRegions, dailyQuestRegions);

  const totalExpPercentage = calculateTotalExpPercentage({
    characterLevel,
    regions: validRegions,
    questExp: dailyQuestExp,
    minLevelData: dailyQuestMinRegionsLevel,
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
        <ListItemText
          primary={title}
          secondary={
            <Box display="flex">
              <Typography
                variant="body2"
                flexGrow={1}
                fontWeight={500}
                color="#ffff00"
              >
                경험치 획득 시 총합
              </Typography>
              <Typography variant="body2" fontWeight={500} color="#ffff00">
                ({truncateToFixed(totalExpPercentage, 3)}%)
              </Typography>
            </Box>
          }
          primaryTypographyProps={{
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
          }}
          secondaryTypographyProps={{ color: 'white' }}
        />
      </ListItem>

      {dailyQuestRegions.map((region) => (
        <QuestListItemUI
          key={region}
          label={region}
          selectedRegions={selectedRegions}
          handleCheckboxChange={handleCheckboxChange}
          regions={dailyQuestRegions}
        />
      ))}
    </List>
  );
};

export default QuestListUI;
