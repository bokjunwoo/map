import { useRecoilValue } from 'recoil';
import { totalExpSelector } from '../atoms/expRateState';
import { totalItemDropSelector } from '../atoms/itemDropState';
import { totalMesoDropSelector } from '../atoms/mesoDropState';
import { userLevelState } from '../atoms/userLevelState';
import {
  calculateItemDropMultiplier,
  calculateTotalExperience,
  calculateTotalMeso,
} from '../utils/calculate';

const useMobAmounts = (mapInfo: MapInfo) => {
  const expRate = useRecoilValue(totalExpSelector);
  const mesoDropRate = useRecoilValue(totalMesoDropSelector);
  const itemDropRate = useRecoilValue(totalItemDropSelector);
  const userLevel = useRecoilValue(userLevelState);

  const itemDropMultiplier = calculateItemDropMultiplier(itemDropRate);

  const expAmount = calculateTotalExperience({
    monsters: mapInfo.monsters,
    burningField: mapInfo.burning_field,
    expRate,
    userLevel,
  });

  const pureMesoAmount =
    calculateTotalMeso({
      monsters: mapInfo.monsters,
      userLevel,
    }) * itemDropMultiplier;

  const bonusMesoAmount =
    pureMesoAmount * (mesoDropRate / 100) * itemDropMultiplier;

  return { expAmount, pureMesoAmount, bonusMesoAmount };
};

export default useMobAmounts;
