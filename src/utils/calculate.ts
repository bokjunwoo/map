import { requiredLevelExp } from '../data/level';
import {
  ExperienceCalculator,
  MesoCalculator,
  PolloPlayTimeCalculator,
  PrittoPlayTimeCalculator,
  CalculateExpPercentageParams,
} from '../interface/calculate';
import { MapMonsterInfo } from '../interface/map';

export const calculateSumOfMonsters = (monsters: MapMonsterInfo[]) => {
  const numberOfMonster = monsters.map((monster) => monster.number_of_monster);
  return numberOfMonster.reduce((total, current) => total + current, 0);
};

export const calculateTotalMonstersWithTime = (
  monsters: MapMonsterInfo[],
  time: number
): number => {
  const numberOfMonster = calculateSumOfMonsters(monsters);

  return numberOfMonster * time * 8;
};

export const calculateExperienceMultiplier = (
  playerLevel: number,
  monsters: MapMonsterInfo[]
): number[] => {
  const experienceMultipliers: number[] = [];

  for (const monster of monsters) {
    const multiplier = calculateIndividualExperienceMultiplier(
      playerLevel,
      monster
    );
    experienceMultipliers.push(multiplier);
  }

  return experienceMultipliers;
};

export const calculateIndividualExperienceMultiplier = (
  playerLevel: number,
  monster: MapMonsterInfo
): number => {
  const levelDifference = playerLevel - monster.level;

  let multiplier: number;

  if (levelDifference >= 40) {
    multiplier = 0.7;
  } else if (levelDifference >= 21) {
    multiplier = 0.71 + (levelDifference - 21) * 0.01;
  } else if (levelDifference >= 20) {
    multiplier = 0.95;
  } else if (levelDifference >= 18) {
    multiplier = 0.96;
  } else if (levelDifference >= 16) {
    multiplier = 0.97;
  } else if (levelDifference >= 14) {
    multiplier = 0.98;
  } else if (levelDifference >= 12) {
    multiplier = 0.99;
  } else if (levelDifference >= 10) {
    multiplier = 1;
  } else if (levelDifference >= 5) {
    multiplier = 1.05;
  } else if (levelDifference >= 2) {
    multiplier = 1.1;
  } else if (levelDifference >= 1) {
    multiplier = 1.2;
  } else if (levelDifference >= -1) {
    multiplier = 1.2;
  } else if (levelDifference >= -4) {
    multiplier = 1.1;
  } else if (levelDifference >= -9) {
    multiplier = 0.95;
  } else if (levelDifference >= -20) {
    multiplier = 1 - (levelDifference - -20) * 0.01;
  } else if (levelDifference >= -35) {
    multiplier = 1 - (levelDifference - -35) * 0.04;
  } else if (levelDifference >= -39) {
    multiplier = 0.1;
  } else {
    multiplier = 0;
  }

  return multiplier;
};

export const calculateTotalExperience: ExperienceCalculator = ({
  monsters,
  burningField,
  expRate,
  userLevel,
}) => {
  const multipliers = calculateExperienceMultiplier(userLevel, monsters);

  const scaledExperiences: number[] = monsters.map(
    (monster, index) => monster.experience * multipliers[index]
  );

  const totalExperience: number = scaledExperiences
    .map(
      (scaledExperience, index) =>
        scaledExperience * monsters[index].number_of_monster
    )
    .reduce((total, current) => total + current, 0);

  const totalExperienceWithRates =
    ((expRate + burningField) / 100) * totalExperience * 8;

  return Math.floor(totalExperienceWithRates);
};

export const calculateMesoMultiplier = (
  playerLevel: number,
  monsters: MapMonsterInfo[]
): number[] => {
  const mesoMultipliers: number[] = [];

  for (const monster of monsters) {
    const multiplier = calculateIndividualMesoMultiplier(playerLevel, monster);
    mesoMultipliers.push(multiplier);
  }

  return mesoMultipliers;
};

export const calculateIndividualMesoMultiplier = (
  userLevel: number,
  monster: MapMonsterInfo
): number => {
  const levelDifference = userLevel - monster.level;

  let multiplier: number;

  if (levelDifference >= 30) {
    multiplier = 1;
  } else if (levelDifference >= 29) {
    multiplier = 0.97;
  } else if (levelDifference >= 28) {
    multiplier = 0.84;
  } else if (levelDifference >= 27) {
    multiplier = 0.76;
  } else if (levelDifference >= 26) {
    multiplier = 0.65;
  } else if (levelDifference >= 25) {
    multiplier = 0.55;
  } else if (levelDifference >= 24) {
    multiplier = 0.46;
  } else if (levelDifference >= 23) {
    multiplier = 0.38;
  } else if (levelDifference >= 22) {
    multiplier = 0.31;
  } else if (levelDifference >= 21) {
    multiplier = 0.25;
  } else if (levelDifference >= 20) {
    multiplier = 0.2;
  } else if (levelDifference >= 19) {
    multiplier = 0.18;
  } else if (levelDifference >= 18) {
    multiplier = 0.16;
  } else if (levelDifference >= 17) {
    multiplier = 0.14;
  } else if (levelDifference >= 16) {
    multiplier = 0.12;
  } else if (levelDifference >= 15) {
    multiplier = 0.1;
  } else if (levelDifference >= 14) {
    multiplier = 0.08;
  } else if (levelDifference >= 13) {
    multiplier = 0.06;
  } else if (levelDifference >= 12) {
    multiplier = 0.04;
  } else if (levelDifference >= 11) {
    multiplier = 0.02;
  } else if (levelDifference >= -10 && levelDifference <= 10) {
    multiplier = 0;
  } else if (levelDifference === -11) {
    multiplier = 0.03;
  } else if (levelDifference === -12) {
    multiplier = 0.06;
  } else if (levelDifference === -13) {
    multiplier = 0.09;
  } else if (levelDifference === -14) {
    multiplier = 0.12;
  } else if (levelDifference === -15) {
    multiplier = 0.15;
  } else if (levelDifference === -16) {
    multiplier = 0.18;
  } else if (levelDifference === -17) {
    multiplier = 0.21;
  } else if (levelDifference === -18) {
    multiplier = 0.24;
  } else if (levelDifference === -19) {
    multiplier = 0.27;
  } else if (levelDifference === -20) {
    multiplier = 0.3;
  } else if (levelDifference === -21) {
    multiplier = 0.35;
  } else if (levelDifference === -22) {
    multiplier = 0.4;
  } else if (levelDifference === -23) {
    multiplier = 0.45;
  } else if (levelDifference === -24) {
    multiplier = 0.5;
  } else if (levelDifference === -25) {
    multiplier = 0.55;
  } else if (levelDifference === -26) {
    multiplier = 0.6;
  } else if (levelDifference === -27) {
    multiplier = 0.65;
  } else if (levelDifference === -28) {
    multiplier = 0.7;
  } else if (levelDifference === -29) {
    multiplier = 0.75;
  } else if (levelDifference === -30) {
    multiplier = 0.8;
  } else if (levelDifference === -31) {
    multiplier = 0.85;
  } else if (levelDifference === -32) {
    multiplier = 0.9;
  } else if (levelDifference === -33) {
    multiplier = 0.95;
  } else {
    multiplier = 1;
  }

  return 1 - multiplier;
};

export const calculateTotalMeso: MesoCalculator = ({ monsters, userLevel }) => {
  const multipliers = calculateMesoMultiplier(userLevel, monsters);

  const scaledMeso: number[] = monsters.map(
    (monster, index) => monster.meso * multipliers[index]
  );

  const totalMeso = scaledMeso
    .map((scaledMeso, index) => scaledMeso * monsters[index].number_of_monster)
    .reduce((total, current) => total + current, 0);

  const totalExperienceWithRates = totalMeso * 8;

  return Math.floor(totalExperienceWithRates);
};

export const calculatePolloPlayTime: PolloPlayTimeCalculator = ({
  monsterExperience,
  numberOfMonster,
  expMultiplier,
  expValue,
  expRateRatio,
  sundayEventRatio,
  time,
}) => {
  const remainingTime =
    ((expValue * monsterExperience * expRateRatio) /
      (monsterExperience *
        expMultiplier *
        numberOfMonster *
        8 *
        (expRateRatio - sundayEventRatio / 100))) *
      60 -
    time;

  return Math.ceil(remainingTime);
};

export const calculatePrittoPlayTime: PrittoPlayTimeCalculator = ({
  monsterExperience,
  numberOfMonster,
  expMultiplier,
  expValue,
  expRateRatio,
  sundayEventRatio,
  time,
}) => {
  const remainingTime =
    ((expValue * monsterExperience) /
      (monsterExperience *
        expMultiplier *
        numberOfMonster *
        8 *
        (expRateRatio - sundayEventRatio / 100))) *
      60 -
    time;

  return Math.ceil(remainingTime);
};

export const calculateItemDropMultiplier = (itemDropRate: number): number => {
  const itemDropRatio = itemDropRate / 100;
  if (itemDropRatio >= 0.67) {
    return 1;
  } else {
    return (60 * itemDropRatio + 60) / 100;
  }
};

export const calculateExpPercentage = ({
  userLevel,
  expReward,
}: CalculateExpPercentageParams): number => {
  const userExp = requiredLevelExp[userLevel];
  const expPercentage = (expReward / userExp) * 100;
  return parseFloat(expPercentage.toFixed(3));
};
