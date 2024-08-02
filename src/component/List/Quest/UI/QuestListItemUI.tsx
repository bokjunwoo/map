import { ListItem, ListItemButton } from '@mui/material';
import { grey } from '@mui/material/colors';
import useQuest from '../../../../hooks/useQuest';
import QuestStatusCheckboxUI from '../../../CheckBox/QuestStatusCheckboxUI';
import QuestListIconUI from './QuestListIconUI';
import QuestStatusListTextUI from './QuestStatusListTextUI';

type Props<T extends QuestRegion> = {
  label: T;
  selectedRegions: T[];
  handleCheckboxChange: (region: T, checked: boolean) => void;
  questExp: { [key in T]: number };
  minLevelData: { [key in T]: number };
};

const QuestListItemUI = <T extends QuestRegion>({
  label,
  selectedRegions,
  handleCheckboxChange,
  questExp,
  minLevelData,
}: Props<T>) => {
  const { nearestRegion, isObtainable, error } = useQuest({
    label,
    questExp,
    minLevelData,
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
          isObtainable={isObtainable}
          selectedRegions={selectedRegions}
          handleChange={handleCheckboxChange}
          error={error}
        />

        <QuestListIconUI error={error} />

        <QuestStatusListTextUI
          label={label}
          questExp={questExp}
          isObtainable={isObtainable}
          error={error}
          nearestRegion={nearestRegion}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default QuestListItemUI;
