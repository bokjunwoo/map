import MapInfoMobKillInput from '../../../Input/Map/MapInfoMobKillInput';
import ListSubTitleUI from '../../../List/common/ListSubTitleUI';
import ListItemStyle from '../../../List/style/ListItemStyle';

const MapInfoMobKillInputSection = ({ mapInfo }: MapInfoProps) => {
  return (
    <ListItemStyle>
      <ListSubTitleUI
        title="마릿수 설정"
        subtitle="해당 마릿수 변경으로 모든 정보가 계산됩니다."
      />

      <MapInfoMobKillInput mapInfo={mapInfo} />
    </ListItemStyle>
  );
};

export default MapInfoMobKillInputSection;
