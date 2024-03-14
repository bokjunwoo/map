import { MapRegion } from './map';

export interface HeadCellInfo extends MapRegion {
  map_name: string;
  number_of_monsters: number[];
  burning_field: number;
  max_number_of_monster: number;
  max_experience_per_monster: number;
  max_meso_per_monster: number;
}

export interface HeadCell {
  id: keyof HeadCellInfo;
  label: string;
  disable_sorting?: boolean;
}
