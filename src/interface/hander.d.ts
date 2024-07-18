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

export interface HandlePotionRateChangeParams
  extends HandleRateSelectChangeParams {
  reverseSetState: SetterOrUpdater<RateItem[]>;
}

export interface HandlePresetPotionRateChangeParams {
  itemDropStoredValue: RateItem[];
  setItemDropStoredValue: (value: RateItem[]) => void;
  mesoDropStoredValue: RateItem[];
  setMesoDropStoredValue: (value: RateItem[]) => void;
  rateName: string;
  inputValue: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
