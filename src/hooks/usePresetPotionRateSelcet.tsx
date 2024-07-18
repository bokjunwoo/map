import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { handlePresetPotionRateChange } from '../utils/hander';
import useRateLocalStorage from './useRateLocalStorage';

type UsePresetRateSelcetProps = {
  rateName: string;
};

const usePresetPotionRateSelcet = ({ rateName }: UsePresetRateSelcetProps) => {
  const [itemDropStoredValue, setItemDropStoredValue] = useRateLocalStorage<
    RateItem[]
  >('item_drop_rate_preset', [{ label: rateName, value: 0 }]);
  const [mesoDropStoredValue, setMesoDropStoredValue] = useRateLocalStorage<
    RateItem[]
  >('meso_drop_rate_preset', [{ label: rateName, value: 0 }]);

  const initialValue =
    itemDropStoredValue?.find((item) => item.label === rateName)?.value || '';

  const [value, setValue] = useState<string>(initialValue.toLocaleString());

  const handleRateChange = (event: SelectChangeEvent) => {
    const inputValue = event.target.value;

    handlePresetPotionRateChange({
      itemDropStoredValue,
      setItemDropStoredValue,
      mesoDropStoredValue,
      setMesoDropStoredValue,
      rateName,
      inputValue,
      setValue,
    });
  };

  return { value, handleRateChange };
};

export default usePresetPotionRateSelcet;
