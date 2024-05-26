import { ListItem } from '@mui/material';
import ListSubheaderUI from '../../../common/ListSubheaderUI';
import NumberOfMonsterInput from '../../../TextField/NumberOfMonsterInput';

const MapSettingNumberOfMobUI = ({ item }: { item: MapInfo }) => {
  return (
    <ListItem sx={{ display: 'block' }}>
      <ListSubheaderUI title="마릿수 설정" />

      <NumberOfMonsterInput text="1젠당 잡을 수 있는 마릿수" item={item} />
    </ListItem>
  );
};

export default MapSettingNumberOfMobUI;
