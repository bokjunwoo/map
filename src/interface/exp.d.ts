interface SelectThOption {
  countLabel: string;
  selectedValue: number;
  menuItem?: SelectValue[];
  onCountChange?: (event: SelectChangeEvent<unknown>) => void;
}

interface ExpRewardOption {
  runeLabel: string;
  runeValue: number;
  expMultiplier: number;
  mobKillCount: number;
  activeCell: number;
  onCellClick: (columnIndex: number) => void;
  isLevelProportional: boolean;
}

interface ExpRewardOptionProps {
  expRewardOptions: ExpRewardOption[];
}
