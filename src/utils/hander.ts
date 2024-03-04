import {
  HandleValueChangeParams,
  HandleValueInputChangeParams,
} from '../interface/hander';

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

export const handleInputValueChange = ({
  inputValue,
  currentValue,
  setValue,
  setExpRate,
  regex,
  maxAllowedValue,
}: HandleValueInputChangeParams) => {
  if (regex.test(inputValue.toString())) {
    let updatedValue = inputValue;

    if (updatedValue > maxAllowedValue) {
      updatedValue = maxAllowedValue;
    }

    handleValueChange({
      inputValue: updatedValue,
      currentValue: currentValue,
      setValue,
      setExpRate,
    });
  }
};
