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

type UseMobRewardsParams = {
  mapInfo: MapInfo;
  runeRate: number;
};

const useMobRewards = ({ mapInfo, runeRate }: UseMobRewardsParams) => {
  const expRate = useRecoilValue(totalExpSelector);
  const mesoDropRate = useRecoilValue(totalMesoDropSelector);
  const itemDropRate = useRecoilValue(totalItemDropSelector);
  const userLevel = useRecoilValue(userLevelState);

  const itemDropMultiplier = calculateItemDropMultiplier(itemDropRate);

  const mobExp = calculateTotalExperience({
    monsters: mapInfo.monsters,
    burningField: mapInfo.burning_field,
    expRate: expRate + runeRate,
    userLevel,
  });

  const mobPureMeso =
    calculateTotalMeso({
      monsters: mapInfo.monsters,
      userLevel,
    }) * itemDropMultiplier;

  const mobBonusMeso = mobPureMeso * (mesoDropRate / 100) * itemDropMultiplier;

  return { mobExp, mobPureMeso, mobBonusMeso };
};

export default useMobRewards;
