interface RateSelectValue {
  value: number;
  label: string;
}

export interface RateSelectOption {
  label: string;
  key: string;
  values: RateSelectValue[];
}

export interface RateInputOption {
  label: string;
  key: string;
}

export interface RateList {
  label: string;
  Components: React.ComponentType[];
  rgb: string;
}

export interface RateItem {
  rateName: string;
  value: number;
}
