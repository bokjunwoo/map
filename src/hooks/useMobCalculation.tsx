import { useRecoilValue } from 'recoil';
import { totalExpSelector } from '../atoms/expRateState';
import { totalItemDropSelector } from '../atoms/itemDropState';
import { totalMesoDropSelector } from '../atoms/mesoDropState';
import { userLevelState } from '../atoms/userLevelState';
import {
  calculateIndividualExperienceMultiplier,
  calculateIndividualMesoMultiplier,
  calculateItemDropMultiplier,
} from '../utils/calculate';

type UseMobCalculationParams = {
  mob: MapMonsterInfo;
  isLevelProportional: boolean;
  additionalExpRate: number;
};

const useMobCalculation = ({
  mob,
  isLevelProportional,
  additionalExpRate,
}: UseMobCalculationParams) => {
  const expRate = useRecoilValue(totalExpSelector);
  const mesoDropRate = useRecoilValue(totalMesoDropSelector);
  const itemDropRate = useRecoilValue(totalItemDropSelector);
  const userLevel = useRecoilValue(userLevelState);

  const levelMultiplier = calculateIndividualExperienceMultiplier(
    userLevel,
    mob
  );
  const mesoMultiplier = calculateIndividualMesoMultiplier(userLevel, mob);
  const itemDropMultiplier = calculateItemDropMultiplier(itemDropRate);

  const totalExpRate = expRate + additionalExpRate;
  const totalExpRatio = totalExpRate / 100;

  const mobExpMultiplier = isLevelProportional
    ? Math.floor(mob.experience * levelMultiplier)
    : mob.experience;

  const calculatedExp = Math.floor(mobExpMultiplier * totalExpRatio);

  const calculatedPureMeso = Math.floor(
    mesoMultiplier * mob.meso * itemDropMultiplier
  );

  const calculatedBonusMeso = Math.floor(
    mesoMultiplier * mob.meso * (mesoDropRate / 100) * itemDropMultiplier
  );

  return {
    levelMultiplier,
    totalExpRate,
    mobExpMultiplier,
    mesoMultiplier,
    itemDropMultiplier,
    calculatedExp,
    calculatedPureMeso,
    calculatedBonusMeso,
  };
};

export default useMobCalculation;
