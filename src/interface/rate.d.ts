interface RateSelectValue {
  value: number;
  label: string;
}

interface RateSelectOption {
  label: string;
  key: string;
  values: RateSelectValue[];
}

interface RateInputOption {
  label: string;
  key: string;
}

interface RateList {
  label: string;
  Components: React.ComponentType[];
  rgb: string;
}

interface RateItem {
  rateName: string;
  value: number;
}

interface MobInfo {
  text: string;
  amount: number;
}
