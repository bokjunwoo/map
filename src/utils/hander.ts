import {
  HandlePresetRateChangeParams,
  HandleRateInputChangeParams,
  HandleRateSelectChangeParams,
} from '../interface/hander';

export const handleRateSelectChange = ({
  rateItem,
  rateName,
  inputValue,
  setRate,
  setValue,
}: HandleRateSelectChangeParams): void => {
  const existingIndex = rateItem.findIndex((item) => item.label === rateName);

  if (existingIndex !== -1) {
    const updatedRate = [...rateItem];
    updatedRate[existingIndex] = {
      label: rateName,
      value: Number(inputValue),
    };
    setRate(updatedRate);
    setValue(inputValue);
  } else {
    setRate((prevState: RateItem[]) => [
      ...prevState,
      { label: rateName, value: Number(inputValue) },
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

export const handlePresetRateChange = ({
  rateItem,
  rateName,
  inputValue,
  setValue,
  setStoredValue,
}: HandlePresetRateChangeParams) => {
  const existingIndex = rateItem.findIndex((item) => item.label === rateName);

  if (existingIndex !== -1) {
    const updatedRate = [...rateItem];
    updatedRate[existingIndex] = {
      label: rateName,
      value: Number(inputValue),
    };
    setValue(inputValue);
    setStoredValue(updatedRate);
  } else {
    const newRateItem = [
      ...rateItem,
      { label: rateName, value: Number(inputValue) },
    ];
    setValue(inputValue);
    setStoredValue(newRateItem);
  }
};
