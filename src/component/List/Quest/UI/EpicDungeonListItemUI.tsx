import { ListItem, ListItemButton } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../../../atoms/userLevelState';
import { epicDungeonMinRegionsLevel } from '../../../../data/region';
import useRadio from '../../../../hooks/useRadio';
import QuestStatusCheckboxUI from '../../../CheckBox/QuestStatusCheckboxUI';
import EpicDungeonRadioUI from '../../../Radio/EpicDungeonRadio';
import EpicDungeonListTextUI from './EpicDungeonListTextUI';
import QuestListIconUI from './QuestListIconUI';

type Props<T extends EpicDungeonRegion> = {
  label: T;
  selectedRegions: T[];
  handleCheckboxChange: (region: T, checked: boolean) => void;
};

const EpicDungeonListItemUI = <T extends EpicDungeonRegion>({
  label,
  selectedRegions,
  handleCheckboxChange,
}: Props<T>) => {
  const [expValue, handleExpChange] = useRadio('1');

  const characterLevel = useRecoilValue(userLevelState);

  const isObtainable = characterLevel >= epicDungeonMinRegionsLevel[label];

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
      <EpicDungeonRadioUI value={expValue} handleChange={handleExpChange} />

      <ListItemButton
        sx={{
          width: '100%',
          height: 35,
          px: 1.5,
          py: 0.5,
        }}
        dense
        disabled={!isObtainable}
        disableTouchRipple
      >
        <QuestStatusCheckboxUI
          label={label}
          selectedRegions={selectedRegions}
          handleChange={handleCheckboxChange}
          error={false}
        />

        <QuestListIconUI error={false} />

        <EpicDungeonListTextUI
          label={label}
          isObtainable={isObtainable}
          expValue={expValue}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default EpicDungeonListItemUI;
