import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import useRateSelect from '../../../hooks/useRateSelect';
import RateSelectUI from '../common/RateSelectUI';

const ZeroUnion = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: expRateState,
    rateName: 'zero_union',
  });

  const rateOption: RateSelectOption = {
    label: '제로 유니온 공격대원',
    key: 'zero_union',
    values: [
      { value: 0, label: '미적용' },
      { value: 4, label: 'B (+4%)' },
      { value: 6, label: 'A (+6%)' },
      { value: 8, label: 'S (+8%)' },
      { value: 10, label: 'SS (+10%)' },
      { value: 12, label: 'SSS (+12%)' },
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

export default ZeroUnion;
