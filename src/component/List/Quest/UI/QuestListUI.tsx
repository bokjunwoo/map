import { Box, List, ListItem, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
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
  questExp: { [key in T]: number };
  minLevelData: { [key in T]: number };
};

const QuestListUI = <T extends QuestRegion>({
  title,
  characterLevel,
  dailyQuestRegions,
  selectedRegions,
  handleCheckboxChange,
  questExp,
  minLevelData,
}: Props<T>) => {
  const validRegions = filterValidRegions(selectedRegions, dailyQuestRegions);

  const totalExpPercentage = calculateTotalExpPercentage({
    characterLevel,
    regions: validRegions,
    questExp,
    minLevelData,
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

      {dailyQuestRegions.map((region) => (
        <QuestListItemUI
          key={region}
          label={region}
          selectedRegions={selectedRegions}
          handleCheckboxChange={handleCheckboxChange}
          questExp={questExp}
          minLevelData={minLevelData}
        />
      ))}
    </List>
  );
};

export default QuestListUI;
