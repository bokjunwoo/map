import { mesoDropState } from '../../../atoms/mesoDropState';
import useRateSelect from '../../../hooks/useRateSelect';
import { RateSelectOption } from '../../../interface/rate';
import RateSelectUI from '../common/RateSelectUI';

const PhantomUnion = () => {
  const { value, handleRateChange } = useRateSelect(mesoDropState);

  const rateOption: RateSelectOption = {
    label: '팬텀 유니온',
    key: 'Phantom_union',
    values: [
      { value: 0, label: '미적용' },
      { value: 1, label: 'B (+1%)' },
      { value: 2, label: 'A (+2%)' },
      { value: 3, label: 'S (+3%)' },
      { value: 4, label: 'SS (+4%)' },
      { value: 5, label: 'SSS (+5%)' },
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

export default PhantomUnion;
