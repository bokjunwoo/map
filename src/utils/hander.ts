import { HandleValueChangeParams } from '../interface/hander';

export const handleValueChange = ({
  inputValue,
  currentValue,
  setExpRate,
  setValue,
}: HandleValueChangeParams): void => {
  if (currentValue !== inputValue) {
    setExpRate(
      (prevExpIncrease) => prevExpIncrease - currentValue + inputValue
    );
    setValue(inputValue.toString());
  }
};
