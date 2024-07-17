export interface HandleRateSelectChangeParams {
  rateItem: RateItem[];
  rateName: string;
  inputValue: string;
  setRate: SetterOrUpdater<RateItem[]>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface HandleRateInputChangeParams
  extends HandleRateSelectChangeParams {
  regex: RegExp;
  maxAllowedValue: number;
}

export interface HandlePresetRateChangeParams {
  rateItem: RateItem[];
  rateName: string;
  inputValue: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setStoredValue: (value: RateItem[]) => void;
}
