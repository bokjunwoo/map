import {
  HandlePotionRateChangeParams,
  HandlePresetPotionRateChangeParams,
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

export const handlePotionRateSelectChange = ({
  rateItem,
  rateName,
  inputValue,
  setRate,
  setValue,
  reverseSetState,
}: HandlePotionRateChangeParams): void => {
  const existingIndex = rateItem.findIndex((item) => item.label === rateName);
  const updatedValue = Number(inputValue);

  if (existingIndex !== -1) {
    const updatedRate = [...rateItem];
    updatedRate[existingIndex] = {
      label: rateName,
      value: updatedValue,
    };
    setRate(updatedRate);
    setValue(inputValue);
  } else {
    const newRateItem = {
      label: rateName,
      value: updatedValue,
    };
    setRate((prevState: RateItem[]) => [...prevState, newRateItem]);
    setValue(inputValue);
  }

  reverseSetState((prevState: RateItem[]) => {
    const reverseExistingIndex = prevState.findIndex(
      (item) => item.label === rateName
    );
    if (reverseExistingIndex !== -1) {
      const updatedReverseRate = [...prevState];
      updatedReverseRate[reverseExistingIndex] = {
        label: rateName,
        value: updatedValue,
      };
      return updatedReverseRate;
    } else {
      return [...prevState, { label: rateName, value: updatedValue }];
    }
  });
};

const updateStoredValue = (
  storedValue: RateItem[],
  rateName: string,
  inputValue: string,
  setStoredValue: (newRate: RateItem[]) => void
) => {
  const existingIndex = storedValue.findIndex(
    (item) => item.label === rateName
  );
  const updatedValue = Number(inputValue);

  if (existingIndex !== -1) {
    const updatedRate = [...storedValue];
    updatedRate[existingIndex] = {
      label: rateName,
      value: updatedValue,
    };
    setStoredValue(updatedRate);
  } else {
    const newRateItem = [
      ...storedValue,
      { label: rateName, value: updatedValue },
    ];
    setStoredValue(newRateItem);
  }
};

export const handlePresetPotionRateChange = ({
  itemDropStoredValue,
  setItemDropStoredValue,
  mesoDropStoredValue,
  setMesoDropStoredValue,
  rateName,
  inputValue,
  setValue,
}: HandlePresetPotionRateChangeParams) => {
  setValue(inputValue);
  updateStoredValue(
    itemDropStoredValue,
    rateName,
    inputValue,
    setItemDropStoredValue
  );
  updateStoredValue(
    mesoDropStoredValue,
    rateName,
    inputValue,
    setMesoDropStoredValue
  );
};
