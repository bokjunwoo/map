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
  monsterLevels: number[]
): number[] => {
  const multipliers: number[] = [];

  for (const monsterLevel of monsterLevels) {
    const levelDifference = playerLevel - monsterLevel;

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

    multipliers.push(multiplier);
  }

  return multipliers;
};

export const calculateTotalExperience: ExperienceCalculator = ({
  numberOfMonsters,
  monsterExperiences,
  monsterLevels,
  burningField,
  expRate,
  time,
  playerLevel,
}) => {
  const multipliers = calculateExperienceMultiplier(playerLevel, monsterLevels);

  const scaledExperiences = monsterExperiences.map(
    (experience, index) => experience * multipliers[index]
  );

  const totalExperience = scaledExperiences
    .map(
      (scaledExperience, index) => scaledExperience * numberOfMonsters[index]
    )
    .reduce((total, current) => total + current, 0);

  const totalExperienceWithRates =
    ((expRate + burningField) / 100) * totalExperience * 8 * time;

  return Math.floor(totalExperienceWithRates);
};
