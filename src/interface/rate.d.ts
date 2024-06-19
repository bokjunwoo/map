interface RateItem {
  label: string;
  value: number;
}

interface RateSelectOption {
  label: string;
  key: string;
  values: RateItem[];
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

interface MobInfo {
  text: string;
  amount: number;
  unit?: string;
}
