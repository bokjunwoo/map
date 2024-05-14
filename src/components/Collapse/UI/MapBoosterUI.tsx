import { Divider, List } from '@mui/material';
import { MapInfo, MapMonsterInfo } from '../../../interface/map';
import LabelChipUI from '../../Chip/UI/LabelChipUI';
import ListHeaderUI from '../../common/ListHeaderUI';
import MapExpRateStats from '../common/MapExpRateStats';
import MapBoosterCalculateTable from '../MapBooster/MapBoosterCalculateTable';
import MapBoosterInput from '../MapBooster/MapBoosterInput';
import MapBoosterExplanationUI from '../MapBooster/UI/MapBoosterExplanationUI';
import MapBoosterMonsterStatsUI from '../MapBooster/UI/MapBoosterMonsterStatsUI';

type MapBoosterUIProps = {
  highestLevelMonster: MapMonsterInfo;
  selectedRuneValue: number;
  setSelectedRuneValue: React.Dispatch<React.SetStateAction<number>>;
  numberOfMonster: number;
  setNumberOfMonster: React.Dispatch<React.SetStateAction<number>>;
  item: MapInfo;
};

const MapBoosterUI = ({
  highestLevelMonster,
  selectedRuneValue,
  setSelectedRuneValue,
  numberOfMonster,
  setNumberOfMonster,
  item,
}: MapBoosterUIProps) => {
  return (
    <List
      sx={{
        bgcolor: 'background.paper',
      }}
      dense
    >
      <ListHeaderUI
        iconPath={require(`../../../assets/etc_icon/booster.png`)}
        headerText="VIP 부스터 / 헤이스트"
        SecondaryComponent={
          <LabelChipUI
            label="이벤트 진행중 (03.28 ~ 04.24)"
            rgb="255, 153, 0"
          />
        }
        mainComment="캐릭터당 일일 10회 100초 동안 최대 180마리 처치 가능"
      />

      <Divider variant="middle" />
      <MapBoosterExplanationUI />

      <Divider variant="middle" />
      <MapExpRateStats
        burningField={item.burning_field}
        rune={selectedRuneValue}
      />

      <Divider variant="middle" />
      <MapBoosterMonsterStatsUI
        monster={highestLevelMonster}
        burningField={item.burning_field}
        runeValue={selectedRuneValue}
      />

      <Divider variant="middle" />
      <MapBoosterInput
        numberOfMonster={numberOfMonster}
        setNumberOfMonster={setNumberOfMonster}
      />

      <Divider variant="middle" />
      <MapBoosterCalculateTable
        monster={highestLevelMonster}
        mapName={item.map_name}
        setSelectedRuneValue={setSelectedRuneValue}
      />
    </List>
  );
};

export default MapBoosterUI;
