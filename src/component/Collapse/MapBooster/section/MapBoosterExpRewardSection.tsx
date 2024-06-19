import ListSubTitleUI from '../../../List/common/ListSubTitleUI';
import ListItemStyle from '../../../List/style/ListItemStyle';
import MapBoosterExpRewardTable from '../../../Table/MapBooster/MapBoosterExpRewardTable';

const MapBoosterExpRewardSection = ({ mapInfo }: MapInfoProps) => {
  return (
    <ListItemStyle>
      <ListSubTitleUI title="경험치 계산" />

      <MapBoosterExpRewardTable mapInfo={mapInfo} />
    </ListItemStyle>
  );
};

export default MapBoosterExpRewardSection;
