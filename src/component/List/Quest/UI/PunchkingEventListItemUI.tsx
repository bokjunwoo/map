import { ListItem, ListItemButton } from '@mui/material';
import { grey } from '@mui/material/colors';
import RadioUI from '../../../Radio/RadioUI';
import PunchkingListTextUI from './PunchkingListTextUI';
import QuestListIconUI from './QuestListIconUI';

type Props = {
  label: PunchkingScoreLabel;
  selectedValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PunchkingEventListItemUI = ({
  label,
  selectedValue,
  handleChange,
}: Props) => {
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
        <RadioUI
          value={label}
          selectedValue={selectedValue}
          handleChange={handleChange}
        />

        <QuestListIconUI error={false} />

        <PunchkingListTextUI label={label} />
      </ListItemButton>
    </ListItem>
  );
};

export default PunchkingEventListItemUI;
