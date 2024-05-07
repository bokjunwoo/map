import { useRecoilValue } from 'recoil';
import { totalExpSelector } from '../../../atoms/expRateState';
import { totalMesoDropSelector } from '../../../atoms/mesoDropState';
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
  const mesoDropRate = useRecoilValue(totalMesoDropSelector);
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

  const pureMesoReward =
    calculateTotalMeso({
      monsters: item.monsters,
      userLevel,
    }) * ratio;

  const bonusMesoCalculate = pureMesoReward * (mesoDropRate / 100);

  return (
    <MapCalculateTableUI
      item={updatedMap}
      expReward={expReward}
      pureMesoReward={pureMesoReward}
      bonusMesoReward={bonusMesoCalculate}
    />
  );
};

export default MapCalculateTable;
