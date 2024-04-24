import { ListItem, ListItemText } from '@mui/material';
import ListSubheaderUI from '../../../common/ListSubheaderUI';

const MapEventSkillExplanationUI = () => {
  return (
    <ListItem sx={{ display: 'block' }}>
      <ListSubheaderUI title="스킬 설명" />
      <ListItemText primary="스킬발동시 90마리 몬스터의 경험치 획득" />
    </ListItem>
  );
};

export default MapEventSkillExplanationUI;
