interface SelectValue {
  label: string;
  value: number;
}

interface SelectOptions {
  label: string;
  values: SelectValue[];
}

interface MapSelectOptions {
  countLabel: string | number;
  runeLabel: string;
  runeValue: number;
  selectedValue: number;
  mobKillCount: number;
  isLevelProportional: boolean;
  isSelectBox: boolean;
  activeCell: number;
  onCellClick: (columnIndex: number) => void;
  menuItem?: SelectValue[];
  onCountChange?: (event: SelectChangeEvent<unknown>) => void;
}

interface MapSelectOptionsProps {
  selcetOptions: MapSelectOptions[];
}
