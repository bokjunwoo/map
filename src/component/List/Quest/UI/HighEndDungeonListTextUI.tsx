import { ListItem, ListItemButton } from '@mui/material';
import { grey } from '@mui/material/colors';
import { highEndDungeonExp } from '../../../../data/quest';
import { highEndDungeonMinRegionsLevel } from '../../../../data/region';
import useQuest from '../../../../hooks/useQuest';
import QuestStatusCheckboxUI from '../../../CheckBox/QuestStatusCheckboxUI';
import QuestListIconUI from './QuestListIconUI';
import QuestStatusListTextUI from './QuestStatusListTextUI';

type Props<T extends HighEndDungeonRegion> = {
  label: T;
  selectedRegions: MonsterParkRegion[];
  handleCheckboxChange: (region: MonsterParkRegion, checked: boolean) => void;
};

const HighEndDungeonListTextUI = <T extends HighEndDungeonRegion>({
  label,
  selectedRegions,
  handleCheckboxChange,
}: Props<T>) => {
  const { nearestRegion, isObtainable, error } = useQuest({
    label,
    questExp: highEndDungeonExp,
    minLevelData: highEndDungeonMinRegionsLevel,
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

        <QuestStatusListTextUI
          label={label}
          questExp={highEndDungeonExp}
          isObtainable={isObtainable}
          error={error}
          nearestRegion={nearestRegion}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default HighEndDungeonListTextUI;
