import { RateItem } from './rate';

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
