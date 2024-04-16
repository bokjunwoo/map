import { List, Divider } from '@mui/material';
import { MapInfo } from '../../../interface/map';
import ListHeaderUI from '../../common/ListHeaderUI';
import MapCalculateInput from '../MapCalculate/MapCalculateInput';
import MapCalculateRate from '../MapCalculate/MapCalculateRate';
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
        headerText="사냥 마릿수 계산기"
        mainComment="1젠당 잡을 수 있는 몬스터를 수정한 정보를 얻을 수 있습니다."
      />

      <Divider variant="middle" />
      <MapCalculateRate burningField={item.burning_field} />

      <Divider variant="middle" />
      <MapCalculateInput item={item} />

      <Divider variant="middle" />
      <MapCalculateTable item={item} />
    </List>
  );
};
export default MapCalculateUI;
