import { useRecoilValue } from 'recoil';
import { itemDropState } from '../../../atoms/itemDropState';
import { mesoDropState, rateValueSelector } from '../../../atoms/mesoDropState';
import { RATE_NAME } from '../../../constants/constants';
import usePotionRateSelect from '../../../hooks/usePotionRateSelect';
import RateSelectUI from '../common/RateSelectUI';

const MesoDropWealthAcquisitionPotion = () => {
  const { value, handleRateChange } = usePotionRateSelect({
    rateValueSelector,
    state: mesoDropState,
    rateName: RATE_NAME.WEALTH_ACQUISITION_POTION,
    reverseState: itemDropState,
  });

  const mesoDropItem = useRecoilValue(mesoDropState);

  const potionValue = () => {
    const totalMesoDropRate = mesoDropItem.reduce(
      (total, rate) => total + rate.value,
      0
    );
    if (totalMesoDropRate === 0) return 20;

    const potionRate = mesoDropItem.find(
      (rate) => rate.label === RATE_NAME.WEALTH_ACQUISITION_POTION
    );

    const isPotion = potionRate?.value !== 0 && potionRate;
    const applyMultiplicationPotion = Math.floor(
      (100 + totalMesoDropRate - (isPotion ? 20 : 0)) * 1.2 -
        100 -
        totalMesoDropRate
    );

    return applyMultiplicationPotion + (isPotion ? 20 : 0);
  };

  const rateOption: RateSelectOption = {
    label: '재획비(곱적용)',
    key: RATE_NAME.WEALTH_ACQUISITION_POTION,
    values: [
      { value: 0, label: '미적용' },
      { value: 20, label: `곱적용 (+${potionValue()})%` },
    ],
  };

  return (
    <RateSelectUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default MesoDropWealthAcquisitionPotion;
