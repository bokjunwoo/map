import { MapMonsterInfo } from './map';

interface CalculateTotalExperienceParams {
  monsters: MapMonsterInfo[];
  expRate: number;
  time: number;
  playerLevel: number;
  burningField: number;
}

interface ExperienceCalculator {
  (params: CalculateTotalExperienceParams): number;
}

interface CalculateTotalMesoParams {
  monsters: MapMonsterInfo[];
  playerLevel: number;
  time: number;
}

interface MesoCalculator {
  (params: CalculateTotalMesoParams): number;
}
