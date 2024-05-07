import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import useRateSelect from '../../../hooks/useRateSelect';
import { RateSelectOption } from '../../../interface/rate';
import RateSelectUI from '../common/RateSelectUI';

const SpiritPendant = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: expRateState,
    rateName: 'spirit_pendant',
  });

  const rateOption: RateSelectOption = {
    label: '정령의 팬던트',
    key: 'spirit_pendant',
    values: [
      { value: 0, label: '미적용' },
      { value: 10, label: '1시간 미만 (+10%)' },
      { value: 20, label: '2시간 미만 (+20%)' },
      { value: 30, label: '2시간 이상 (+30%)' },
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

export default SpiritPendant;
