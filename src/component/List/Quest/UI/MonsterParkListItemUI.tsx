import { ListItem, ListItemButton } from '@mui/material';
import { grey } from '@mui/material/colors';
import QuestStatusCheckboxUI from '../../../CheckBox/QuestStatusCheckboxUI';
import ExtremeParkListItemUI from './ExtremeParkListItemUI';
import QuestListIconUI from './QuestListIconUI';

type Props<T extends ExtremeParkRegion> = {
  label: T;
  characterLevel: number;
  selectedRegions: MonsterParkRegion[];
  handleCheckboxChange: (region: MonsterParkRegion, checked: boolean) => void;
};

const MonsterParkListItemUI = <T extends ExtremeParkRegion>({
  label,
  characterLevel,
  selectedRegions,
  handleCheckboxChange,
}: Props<T>) => {
  const isObtainableExtremeDungeon = characterLevel >= 260;

  return (
    <ListItem
      disablePadding
      alignItems="center"
      sx={{
        border: `1px solid ${grey[400]}`,
        borderRadius: 1,
        mt: 0.5,
        bgcolor: grey[200],
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ListItemButton
        sx={{
          width: '100%',
          height: 35,
          px: 1.5,
          py: 0.5,
        }}
        dense
        disableTouchRipple
      >
        <QuestStatusCheckboxUI
          label={label}
          selectedRegions={selectedRegions}
          handleChange={handleCheckboxChange}
          error={false}
        />

        <QuestListIconUI error={false} />

        <ExtremeParkListItemUI
          label={label}
          isObtainable={isObtainableExtremeDungeon}
          expValue={1}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default MonsterParkListItemUI;
