import ListStyle from '../../List/style/ListStyle';
import MapInfoBurningFieldSection from './section/MapInfoBurningFieldSection';
import MapInfoMobKillInputSection from './section/MapInfoMobKillInputSection';

const MapInfoUI = ({ mapInfo }: MapInfoProps) => {
  return (
    <ListStyle>
      <MapInfoBurningFieldSection mapName={mapInfo.map_name} />

      <MapInfoMobKillInputSection mapInfo={mapInfo} />
    </ListStyle>
  );
};

export default MapInfoUI;
