import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import useRateSelect from '../../../hooks/useRateSelect';
import RateSelectUI from '../common/RateSelectUI';

const ExpTitle = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: expRateState,
    rateName: 'exp_title',
  });

  const rateOption: RateSelectOption = {
    label: '경험치 칭호',
    key: 'exp_title',
    values: [
      { value: 0, label: '미적용' },
      { value: 10, label: '쑥쑥 새싹 (+10%)' },
      { value: 10, label: 'Eternal Flame (+10%)' },
      { value: 20, label: 'Infinite Flame (+20%)' },
      { value: 20, label: 'PREMIUM 칭호 (+20%)' },
      { value: 30, label: '엘 클리어 (+30%)' },
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

export default ExpTitle;
