import { useRecoilValue } from 'recoil';
import { totalExpSelector } from '../../../atoms/expRateState';
import { numberOfMonsterState } from '../../../atoms/numberOfMonsterState';
import { userLevelState } from '../../../atoms/userLevelState';
import { MapInfo } from '../../../interface/map';
import {
  calculateTotalExperience,
  calculateTotalMeso,
} from '../../../utils/calculate';
import MapCalculateTableUI from './UI/MapCalculateTableUI';

const MapCalculateTable = ({ item }: { item: MapInfo }) => {
  const expRate = useRecoilValue(totalExpSelector);
  const userLevel = useRecoilValue(userLevelState);

  const numberOfMonster = useRecoilValue(numberOfMonsterState(item.map_name));

  const updatedMap = { ...item, number_of_monster: numberOfMonster };

  const ratio = numberOfMonster / item.number_of_monster;

  const expReward =
    calculateTotalExperience({
      monsters: item.monsters,
      burningField: item.burning_field,
      expRate,
      userLevel,
    }) * ratio;

  const mesoReward =
    calculateTotalMeso({
      monsters: item.monsters,
      userLevel,
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
