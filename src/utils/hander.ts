import {
  HandleRateInputChangeParams,
  HandleRateSelectChangeParams,
} from '../interface/hander';
import { RateItem } from '../interface/rate';

export const handleRateSelectChange = ({
  rateItem,
  rateName,
  inputValue,
  setRate,
  setValue,
}: HandleRateSelectChangeParams): void => {
  const existingIndex = rateItem.findIndex(
    (item) => item.rateName === rateName
  );

  if (existingIndex !== -1) {
    const updatedRate = [...rateItem];
    updatedRate[existingIndex] = {
      rateName,
      value: Number(inputValue),
    };
    setRate(updatedRate);
    setValue(inputValue);
  } else {
    setRate((prevState: RateItem[]) => [
      ...prevState,
      { rateName, value: Number(inputValue) },
    ]);
    setValue(inputValue);
  }
};

export const handleRateInputChange = ({
  rateItem,
  rateName,
  inputValue,
  setValue,
  setRate,
  regex,
  maxAllowedValue,
}: HandleRateInputChangeParams) => {
  if (regex.test(inputValue)) {
    let updatedValue = inputValue;

    if (Number(updatedValue) > maxAllowedValue) {
      updatedValue = maxAllowedValue.toLocaleString();
    }

    handleRateSelectChange({
      rateItem,
      rateName,
      inputValue: updatedValue,
      setRate,
      setValue,
    });
  }
};
