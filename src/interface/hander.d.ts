export interface HandleValueChangeParams {
  inputValue: number;
  currentValue: number;
  setExpRate: React.Dispatch<React.SetStateAction<number>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
