import {
  araneRiverDailyQuestRegions,
  grandisDailyQuestRegions,
} from '../data/quest';
import { epicDungeonMinRegionsLevel } from '../data/region';
import { calculateExpPercentage } from './calculate';

export const calculateTotalExpPercentage = <T>({
  characterLevel,
  regions,
  questExp,
  minLevelData,
}: CalculateTotalExpPercentageParams<T>): number => {
  return regions.reduce((total, region) => {
    const expReward = questExp[region] || 0;
    const isObtainable = characterLevel >= (minLevelData[region] || 0);

    if (isObtainable) {
      const expPercentage = calculateExpPercentage({
        userLevel: characterLevel,
        expReward,
      });
      return total + expPercentage;
    }
    return total;
  }, 0);
};

export const calculateEpicDungeonTotalExpPercentage = ({
  characterLevel,
  regions,
  epicDungeonExp,
}: CalculateEpicDungeonTotalExpPercentage): number => {
  return regions.reduce((total, region) => {
    const expReward = epicDungeonExp[region][characterLevel] || 0;
    const isObtainable =
      characterLevel >= (epicDungeonMinRegionsLevel[region] || 0);

    if (isObtainable) {
      const expPercentage = calculateExpPercentage({
        userLevel: characterLevel,
        expReward,
      });
      return total + expPercentage;
    }
    return total;
  }, 0);
};

export const filterValidRegions = <T extends AllQuestRegion>(
  selectedRegions: T[],
  validRegions: T[]
) => {
  return selectedRegions.filter((region) => validRegions.includes(region));
};

export const getMobCount = (region: QuestRegion): number => {
  if (
    araneRiverDailyQuestRegions.includes(region as AraneRiverDailyQuestRegion)
  ) {
    return 200;
  }

  if (grandisDailyQuestRegions.includes(region as GrandisDailyQuestRegion)) {
    return 500;
  }

  throw new Error('Unknown region');
};
