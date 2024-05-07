import { useRecoilValue } from 'recoil';
import { mesoDropState, rateValueSelector } from '../../../atoms/mesoDropState';
import useRateSelect from '../../../hooks/useRateSelect';
import { RateSelectOption } from '../../../interface/rate';
import RateSelectUI from '../common/RateSelectUI';

const MesoDropWealthAcquisitionPotion = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: mesoDropState,
    rateName: 'wealth_acquisition_potion',
  });

  const mesoDropItem = useRecoilValue(mesoDropState);

  const potionValue = () => {
    const totalMesoDropRate = mesoDropItem.reduce(
      (total, rate) => total + rate.value,
      0
    );
    if (totalMesoDropRate === 0) return 20;

    const potionRate = mesoDropItem.find(
      (rate) => rate.rateName === 'wealth_acquisition_potion'
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
    key: 'wealth_acquisition_potion',
    values: [
      { value: 0, label: '미적용' },
      { value: 20, label: `적용 (+${potionValue()})%` },
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
