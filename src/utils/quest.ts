import {
  araneRiverDailyQuestRegions,
  extremeParkExp,
  grandisDailyQuestRegions,
  highEndDungeonExp,
  mobBaseExp,
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

export const calculateMonsterParkTotalExpPercentage = ({
  characterLevel,
  regions,
}: CalculateMonsterParkTotalExpPercentage): number => {
  let total = 0;

  regions.forEach((region) => {
    if (region === '익스트림 몬스터파크') {
      const expReward = extremeParkExp[characterLevel];
      total += expReward;
    } else {
      const expReward = highEndDungeonExp[region];
      total += expReward;
    }
  });

  const totalExpPercentage = calculateExpPercentage({
    userLevel: characterLevel,
    expReward: total,
  });

  return totalExpPercentage;
};

const calculatePunchkingExp = (
  characterLevel: number,
  score: number
): number => {
  const baseExp = mobBaseExp[characterLevel];
  const baseExp300 = baseExp * 300;

  if (score <= 150) {
    return baseExp300 * score * 2;
  }

  if (score > 150 && score <= 400) {
    const diff = score - 150;
    const additionalExp = diff * 0.8;
    const finalExp = 300 + additionalExp;
    return baseExp300 * finalExp;
  }

  if (score > 400 && score <= 1600) {
    const diff = score - 400;
    const additionalExp = diff * 0.25;
    const finalExp = 500 + additionalExp;
    return baseExp300 * finalExp;
  }

  if (score > 1600 && score <= 2000) {
    const diff = score - 1600;
    const additionalExp = diff * 1;
    const finalExp = 800 + additionalExp;
    return baseExp300 * finalExp;
  }

  if (score > 2000 && score <= 2050) {
    const diff = score - 2000;
    const additionalExp = diff * 5;
    const finalExp = 1200 + additionalExp;
    return baseExp300 * finalExp;
  }

  return 0;
};

export const calculatePunchkingExpPercentage = ({
  characterLevel,
  score,
}: CalculatePunchkingExpPercentage): number => {
  const expReward = calculatePunchkingExp(characterLevel, score);
  const totalExpPercentage = calculateExpPercentage({
    userLevel: characterLevel,
    expReward,
  });

  return totalExpPercentage;
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
