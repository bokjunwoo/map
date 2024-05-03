import { mesoDropState } from '../../../atoms/mesoDropState';
import useRateSelect from '../../../hooks/useRateSelect';
import { RateSelectOption } from '../../../interface/rate';
import RateSelectUI from '../common/RateSelectUI';

const MesoDropWealthAcquisitionPotion = () => {
  const { value, handleRateChange } = useRateSelect({
    state: mesoDropState,
    rateName: 'wealth_acquisition_potion',
  });

  const rateOption: RateSelectOption = {
    label: '재획비(곱적용)',
    key: 'wealth_acquisition_potion',
    values: [
      { value: 0, label: '미적용' },
      { value: 20, label: '적용 (+20%)' },
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
