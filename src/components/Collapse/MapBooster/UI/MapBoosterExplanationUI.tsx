import { ListItem, ListItemText } from '@mui/material';
import ListSubheaderUI from '../../../common/ListSubheaderUI';

const MapBoosterExplanationUI = () => {
  return (
    <ListItem sx={{ display: 'block' }}>
      <ListSubheaderUI title="아이템 설명" />
      <ListItemText
        primary="100초간 생성된 몬스터 1마리당 필드 몬스터 순수 경험치 x 10배의 경험치 획득"
        secondary="젠 주기 5.5초 +(서버렉) 10마리씩 젠되며 최대 15마리를 넘지 않습니다. (총 180마리)"
        secondaryTypographyProps={{ fontSize: 12 }}
      />
    </ListItem>
  );
};

export default MapBoosterExplanationUI;
