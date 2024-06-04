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
  additionalExpRate?: number;
};

const useMobCalculation = ({
  mob,
  isLevelProportional,
  additionalExpRate = 0,
}: UseMobCalculationParams) => {
  const expRate = useRecoilValue(totalExpSelector);
  const mesoDropRate = useRecoilValue(totalMesoDropSelector);
  const itemDropRate = useRecoilValue(totalItemDropSelector);
  const userLevel = useRecoilValue(userLevelState);

  const levelBasedExpRatio = calculateIndividualExperienceMultiplier(
    userLevel,
    mob
  );
  const mesoMultiplier = calculateIndividualMesoMultiplier(userLevel, mob);
  const itemDropMultiplier = calculateItemDropMultiplier(itemDropRate);

  const totalExpRate = expRate + additionalExpRate;
  const totalExpRatio = totalExpRate / 100;

  const expBase = isLevelProportional
    ? mob.experience * levelBasedExpRatio
    : mob.experience;

  const calculatedExp = Math.floor(expBase * totalExpRatio);

  const calculatedPureMeso = Math.floor(
    mesoMultiplier * mob.meso * itemDropMultiplier
  );

  const calculatedBonusMeso = Math.floor(
    mesoMultiplier * mob.meso * (mesoDropRate / 100) * itemDropMultiplier
  );

  return {
    totalExpRate,
    levelBasedExpRatio,
    calculatedExp,
    calculatedPureMeso,
    calculatedBonusMeso,
  };
};

export default useMobCalculation;
