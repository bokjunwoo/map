import { Button } from '@mui/material';
import { useRecoilState } from 'recoil';
import { expRateState } from '../../atoms/expRateState';
import { itemDropState } from '../../atoms/itemDropState';
import { mesoDropState } from '../../atoms/mesoDropState';

const mergeRates = (
  currentRates: RateItem[],
  newRates: RateItem[]
): RateItem[] => {
  const rateMap = new Map<string, RateItem>();

  currentRates.forEach((rate) => rateMap.set(rate.label, rate));
  newRates.forEach((rate) => rateMap.set(rate.label, rate));

  return Array.from(rateMap.values());
};

const PresetButton = () => {
  const [expRate, setExpRate] = useRecoilState(expRateState);
  const [itemDropRate, setItemDropRate] = useRecoilState(itemDropState);
  const [mesoDropRate, setMesoDropRate] = useRecoilState(mesoDropState);

  const handleClick = () => {
    const expStoredValue = window.localStorage.getItem('exp_rate_preset');
    const expParsedValue = expStoredValue ? JSON.parse(expStoredValue) : [];
    const itemDropStoredValue = window.localStorage.getItem(
      'item_drop_rate_preset'
    );
    const itemDropParsedValue = itemDropStoredValue
      ? JSON.parse(itemDropStoredValue)
      : [];
    const mesoDropStoredValue = window.localStorage.getItem(
      'meso_drop_rate_preset'
    );
    const mesoDropParsedValue = mesoDropStoredValue
      ? JSON.parse(mesoDropStoredValue)
      : [];
    const mergedExpRate = mergeRates(expRate, expParsedValue);
    const itemDropMergedExpRate = mergeRates(itemDropRate, itemDropParsedValue);
    const mesoDropMedExpRate = mergeRates(mesoDropRate, mesoDropParsedValue);
    setExpRate(mergedExpRate);
    setItemDropRate(itemDropMergedExpRate);
    setMesoDropRate(mesoDropMedExpRate);
  };

  return (
    <Button variant="outlined" disableRipple onClick={handleClick} size="small">
      프리셋 불러오기
    </Button>
  );
};

export default PresetButton;
