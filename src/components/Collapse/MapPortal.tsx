import { Divider, List } from '@mui/material';
import { useLevelState } from '../../contexts/LevelStateProvider';
import { MapInfo } from '../../interface/map';
import { calculateIndividualExperienceMultiplier } from '../../utils/calculate';
import ListHeaderUI from '../common/ListHeaderUI';
import MapPortalRate from './MapPortal/MapPortalRate';
import MapPortalPolloUI from './MapPortal/UI/MapPortalPolloUI';
import MapPortalPrittoUI from './MapPortal/UI/MapPortalPrittoUI';
import MapPortalWolfAndTotemUI from './MapPortal/UI/MapPortalWolfAndTotemUI';

type MapPortalProps = {
  item: MapInfo;
};

const MapPortal = ({ item }: MapPortalProps) => {
  const { level: playerLevel } = useLevelState();

  const highestLevelMonster = item.monsters.reduce((prev, curr) => {
    return prev.level > curr.level ? prev : curr;
  });

  const expMultiplier = calculateIndividualExperienceMultiplier(
    playerLevel,
    highestLevelMonster
  );

  return (
    <List
      sx={{
        bgcolor: 'background.paper',
      }}
    >
      <ListHeaderUI
        iconPath={require('../../assets/etc_icon/Pollo.png')}
        headerText="폴로 & 프리토"
        mainComment="폴로 프리토의 효율에 대한 정보를 알 수 있습니다."
      />

      <Divider variant="middle" />
      <MapPortalRate burningField={item.burning_field} />

      <Divider variant="middle" />
      <MapPortalPolloUI
        monsterExperience={highestLevelMonster.experience}
        expMultiplier={expMultiplier}
        mapName={item.map_name}
      />

      <Divider variant="middle" />
      <MapPortalPrittoUI
        monsterExperience={highestLevelMonster.experience}
        expMultiplier={expMultiplier}
        mapName={item.map_name}
      />

      <Divider variant="middle" />
      <MapPortalWolfAndTotemUI
        monsterExperience={highestLevelMonster.experience}
        expMultiplier={expMultiplier}
        mapName={item.map_name}
      />
    </List>
  );
};

export default MapPortal;
