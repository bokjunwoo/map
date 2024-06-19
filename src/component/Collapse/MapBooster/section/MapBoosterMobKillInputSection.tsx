import MapBoosterMobKillInput from '../../../Input/Map/MapBoosterMobKillInput';
import ListSubTitleUI from '../../../List/common/ListSubTitleUI';
import ListItemStyle from '../../../List/style/ListItemStyle';

const MapBoosterMobKillInputSection = ({ mapName }: MapNameProps) => {
  return (
    <ListItemStyle>
      <ListSubTitleUI title="마릿수 설정" />

      <MapBoosterMobKillInput mapName={mapName} />
    </ListItemStyle>
  );
};

export default MapBoosterMobKillInputSection;
