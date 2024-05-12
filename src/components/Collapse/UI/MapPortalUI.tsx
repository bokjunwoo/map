import { List, Divider } from '@mui/material';
import { MapMonsterInfo } from '../../../interface/map';
import ListHeaderUI from '../../common/ListHeaderUI';
import MapPortalStats from '../MapPortal/MapPortalStats';
import MapPortalPolloUI from '../MapPortal/UI/MapPortalPolloUI';
import MapPortalPrittoUI from '../MapPortal/UI/MapPortalPrittoUI';
import MapPortalWolfAndTotemUI from '../MapPortal/UI/MapPortalWolfAndTotemUI';

type MapPortalUIProps = {
  mapName: string;
  highestLevelMonster: MapMonsterInfo;
  checkState: PortalCheckState;
  onChangeCheckBox: (event: React.ChangeEvent<HTMLInputElement>) => void;
  expMultiplier: number;
};

const MapPortalUI = ({
  mapName,
  highestLevelMonster,
  checkState,
  onChangeCheckBox,
  expMultiplier,
}: MapPortalUIProps) => {
  return (
    <List
      sx={{
        bgcolor: 'background.paper',
      }}
    >
      <ListHeaderUI
        iconPath={require('../../../assets/etc_icon/Pollo.png')}
        headerText="폴로 & 프리토"
        mainComment="폴로 프리토의 효율에 대한 정보를 알 수 있습니다."
      />

      <Divider variant="middle" />
      <MapPortalStats state={checkState} onChangeCheckBox={onChangeCheckBox} />

      <Divider variant="middle" />
      <MapPortalPolloUI
        monsterExperience={highestLevelMonster.experience}
        expMultiplier={expMultiplier}
        mapName={mapName}
        checkState={checkState}
      />

      <Divider variant="middle" />
      <MapPortalPrittoUI
        monsterExperience={highestLevelMonster.experience}
        expMultiplier={expMultiplier}
        mapName={mapName}
        checkState={checkState}
      />

      <Divider variant="middle" />
      <MapPortalWolfAndTotemUI
        monsterExperience={highestLevelMonster.experience}
        expMultiplier={expMultiplier}
        mapName={mapName}
        checkState={checkState}
      />
    </List>
  );
};

export default MapPortalUI;
