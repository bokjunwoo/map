import { useRecoilValue } from 'recoil';
import { totalExpSelector } from '../../../atoms/expRateState';
import { totalItemDropSelector } from '../../../atoms/itemDropState';
import { totalMesoDropSelector } from '../../../atoms/mesoDropState';
import { numberOfMonsterState } from '../../../atoms/numberOfMonsterState';
import { userLevelState } from '../../../atoms/userLevelState';
import {
  calculateItemDropMultiplier,
  calculateTotalExperience,
  calculateTotalMeso,
} from '../../../utils/calculate';
import MapCalculateTableUI from './UI/MapCalculateTableUI';

const MapCalculateTable = ({ item }: { item: MapInfo }) => {
  const expRate = useRecoilValue(totalExpSelector);
  const mesoDropRate = useRecoilValue(totalMesoDropSelector);
  const itemDropRate = useRecoilValue(totalItemDropSelector);
  const userLevel = useRecoilValue(userLevelState);

  const numberOfMonster = useRecoilValue(numberOfMonsterState(item.map_name));

  const updatedMap = { ...item, number_of_monster: numberOfMonster };

  const ratio = numberOfMonster / item.number_of_monster;

  const itemDropMultiplier = calculateItemDropMultiplier(itemDropRate);

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
    }) *
    ratio *
    itemDropMultiplier;

  const bonusMesoReward =
    pureMesoReward * (mesoDropRate / 100) * itemDropMultiplier;

  return (
    <MapCalculateTableUI
      item={updatedMap}
      expReward={expReward}
      pureMesoReward={pureMesoReward}
      bonusMesoReward={bonusMesoReward}
    />
  );
};

export default MapCalculateTable;
