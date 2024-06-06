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
  sundayEventRatio: number;
  time: number;
}

interface PolloPlayTimeCalculator {
  (params: CalculatePolloPlayTimeParams): number;
}

interface CalculatePrittoPlayTimeParams {
  monsterExperience: number;
  numberOfMonster: number;
  expMultiplier: number;
  expValue: number;
  expRateRatio: number;
  sundayEventRatio: number;
  time: number;
}

interface PrittoPlayTimeCalculator {
  (params: CalculatePrittoPlayTimeParams): number;
}

interface CalculateExpPercentageParams {
  userLevel: number;
  expReward: number;
}

interface CalculateRemainingTime {
  type: 'Pollo' | 'Pritto';
  mobExp: number;
  mobKillCount: number;
  expMultiplier: number;
  levelBasedExpRatio: number;
  totalExpRate: number;
  sundayEventRate: number;
  playTime: number;
}
