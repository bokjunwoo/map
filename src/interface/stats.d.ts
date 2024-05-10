interface CommonOption {
  text: string;
  bgcolor: string;
}

export interface RateListOption extends CommonOption {
  iconName: string;
  value: number;
}

export interface CheckBoxOption extends CommonOption {
  name: string;
  checked: boolean;
}

export interface CheckBoxGroup {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  option: CheckBoxOption[];
}
