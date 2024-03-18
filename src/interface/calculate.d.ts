interface CalculateTotalExperienceParams {
  numberOfMonsters: number[];
  monsterExperiences: number[];
  monsterLevels: number[];
  expRate: number;
  time: number;
  playerLevel: number;
  burningField: number;
}

interface ExperienceCalculator {
  (params: CalculateTotalExperienceParams): number;
}
