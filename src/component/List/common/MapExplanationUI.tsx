import { ListItemText } from '@mui/material';
import ListItemStyle from '../style/ListItemStyle';
import ListSubTitleUI from './ListSubTitleUI';

type MapExplanationUIProps = {
  title: string;
  description: string;
  subText: string;
};

const MapExplanationUI = ({
  title,
  description,
  subText,
}: MapExplanationUIProps) => {
  return (
    <ListItemStyle>
      <ListSubTitleUI title={title} />

      <ListItemText
        primary={description}
        secondary={subText}
        primaryTypographyProps={{ fontSize: 14 }}
        secondaryTypographyProps={{ fontSize: 12 }}
      />
    </ListItemStyle>
  );
};

export default MapExplanationUI;
