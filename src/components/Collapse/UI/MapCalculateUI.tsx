import { List, Divider, ListItem } from '@mui/material';
import ListHeaderUI from '../../common/ListHeaderUI';
import MapCalculateStats from '../MapCalculate/MapCalculateStats';
import MapCalculateTable from '../MapCalculate/MapCalculateTable';

const MapCalculateUI = ({ item }: { item: MapInfo }) => {
  return (
    <List
      sx={{
        bgcolor: 'background.paper',
      }}
    >
      <ListHeaderUI
        iconPath={require('../../../assets/etc_icon/mop_setting.png')}
        headerText="마릿수 계산기"
        mainComment="1젠당 잡을 수 있는 몬스터를 수정한 정보를 얻을 수 있습니다."
      />
      <Divider variant="middle" component="li" />

      <MapCalculateStats burningField={item.burning_field} />

      <Divider variant="middle" />
      <MapCalculateTable item={item} />
    </List>
  );
};
export default MapCalculateUI;
