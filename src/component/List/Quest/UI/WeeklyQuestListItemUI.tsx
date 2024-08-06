import { ListItem, ListItemButton } from '@mui/material';
import { grey } from '@mui/material/colors';
import { weeklyQuestExp } from '../../../../data/quest';
import { araneRiverDailyQuestMinRegionsLevel } from '../../../../data/region';
import useQuest from '../../../../hooks/useQuest';
import QuestStatusCheckboxUI from '../../../CheckBox/QuestStatusCheckboxUI';
import QuestListIconUI from './QuestListIconUI';
import WeeklyQuestStatusListTextUI from './WeeklyQuestStatusListTextUI';

type Props<T extends AraneRiverWeeklyQuestRegion> = {
  label: T;
  selectedRegions: T[];
  handleCheckboxChange: (region: T, checked: boolean) => void;
};

const WeeklyQuestListItemUI = <T extends AraneRiverWeeklyQuestRegion>({
  label,
  selectedRegions,
  handleCheckboxChange,
}: Props<T>) => {
  const { nearestRegion, isObtainable, error } = useQuest({
    label,
    questExp: weeklyQuestExp,
    minLevelData: araneRiverDailyQuestMinRegionsLevel,
  });

  return (
    <ListItem
      disablePadding
      alignItems={error ? 'flex-start' : 'center'}
      sx={{
        border: `1px solid ${grey[400]}`,
        borderRadius: 1,
        mt: 0.5,
        bgcolor: grey[200],
      }}
    >
      <ListItemButton
        sx={{ px: 1.5, py: 0.5, height: error ? 50 : 35 }}
        dense
        disabled={!isObtainable}
        disableTouchRipple
      >
        <QuestStatusCheckboxUI
          label={label}
          selectedRegions={selectedRegions}
          handleChange={handleCheckboxChange}
          error={error}
        />

        <QuestListIconUI error={error} />

        <WeeklyQuestStatusListTextUI
          label={label}
          isObtainable={isObtainable}
          error={error}
          nearestRegion={nearestRegion}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default WeeklyQuestListItemUI;
