import { MapMonsterInfo } from './map';

interface CalculateTotalExperienceParams {
  monsters: MapMonsterInfo[];
  expRate: number;
  userLevel: number;
  burningField: number;
}

interface ExperienceCalculator {
  (params: CalculateTotalExperienceParams): number;
}

interface CalculateTotalMesoParams {
  monsters: MapMonsterInfo[];
  userLevel: number;
}

interface MesoCalculator {
  (params: CalculateTotalMesoParams): number;
}

interface CalculatePolloPlayTimeParams {
  monsterExperience: number;
  numberOfMonster: number;
  expMultiplier: number;
  expValue: number;
  expRateRatio: number;
  time: number;
}

interface PolloPlayTimeCalculator {
  (params: CalculatePrittoPlayTimeParams): number;
}

interface CalculatePrittoPlayTimeParams {
  monsterExperience: number;
  numberOfMonster: number;
  expMultiplier: number;
  expValue: number;
  expRateRatio: number;
  time: number;
}

interface PrittoPlayTimeCalculator {
  (params: CalculatePrittoPlayTimeParams): number;
}
