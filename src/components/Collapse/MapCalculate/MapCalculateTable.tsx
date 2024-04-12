import { useRecoilValue } from 'recoil';
import { numberOfMonsterState } from '../../../atoms/numberOfMonsterState';
import { useExpRateValue } from '../../../contexts/ExpRateStateProvider';
import { useLevelState } from '../../../contexts/LevelStateProvider';
import { MapInfo } from '../../../interface/map';
import {
  calculateTotalExperience,
  calculateTotalMeso,
} from '../../../utils/calculate';
import MapCalculateTableUI from './UI/MapCalculateTableUI';

const MapCalculateTable = ({ item }: { item: MapInfo }) => {
  const expRate = useExpRateValue();
  const { level: playerLevel } = useLevelState();

  const numberOfMonster = useRecoilValue(numberOfMonsterState(item.map_name));

  const updatedMap = { ...item, number_of_monster: numberOfMonster };

  const ratio = numberOfMonster / item.number_of_monster;

  const expReward =
    calculateTotalExperience({
      monsters: item.monsters,
      burningField: item.burning_field,
      expRate,
      playerLevel,
    }) * ratio;

  const mesoReward =
    calculateTotalMeso({
      monsters: item.monsters,
      playerLevel,
    }) * ratio;

  return (
    <MapCalculateTableUI
      item={updatedMap}
      expReward={expReward}
      mesoReward={mesoReward}
    />
  );
};

export default MapCalculateTable;
