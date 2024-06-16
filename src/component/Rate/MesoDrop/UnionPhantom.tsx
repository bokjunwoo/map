import { mesoDropState, rateValueSelector } from '../../../atoms/mesoDropState';
import { RATE_NAME } from '../../../constants/constants';
import useRateSelect from '../../../hooks/useRateSelect';
import RateSelectUI from '../common/RateSelectUI';

const UnionPhantom = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: mesoDropState,
    rateName: RATE_NAME.UNION_PHANTOM,
  });

  const rateOption: RateSelectOption = {
    label: '팬텀 유니온',
    key: RATE_NAME.UNION_PHANTOM,
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

export default UnionPhantom;
