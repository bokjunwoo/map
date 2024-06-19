interface HeadCellInfo extends MapRegion {
  map_name: string;
  number_of_monster: number;
  burning_field: number;
  max_number_of_monster: number;
  max_experience_per_monster: number;
  max_meso_per_monster: number;
}

interface HeadCell {
  id: keyof HeadCellInfo;
  label: string;
  disable_sorting?: boolean;
}

interface PortalTypeList {
  type: 'Pollo' | 'Pritto';
  label: string;
  expMultiplier: number;
  playTime: number;
  increment: () => void;
  decrement: () => void;
  getTimeColor: (
    seconds: number
  ) => '#fde2e4' | '#fff1e6' | '#e2ece9' | '#dfe7fd';
  expMultiplierChange?: (event: SelectChangeEvent<unknown>) => void;
}

interface PortalTypeListProps {
  portalTypeList: PortalTypeList[];
}

interface PortalSelectTypeList {
  label: string;
  initialExpMultiplier: number;
  text?: string;
  menuItem?: SelectValue[];
  handleChange?: (event: SelectChangeEvent<unknown>) => void;
}

interface PortalSelectTypeListProps {
  portalSelectTypeList: PortalSelectTypeList[];
}
