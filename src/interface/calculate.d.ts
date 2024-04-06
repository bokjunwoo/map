import { MapMonsterInfo } from './map';

interface CalculateTotalExperienceParams {
  monsters: MapMonsterInfo[];
  expRate: number;
  playerLevel: number;
  burningField: number;
}

interface ExperienceCalculator {
  (params: CalculateTotalExperienceParams): number;
}

interface CalculateTotalMesoParams {
  monsters: MapMonsterInfo[];
  playerLevel: number;
}

interface MesoCalculator {
  (params: CalculateTotalMesoParams): number;
}
