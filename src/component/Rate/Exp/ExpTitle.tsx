import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import { RATE_NAME } from '../../../constants/constants';
import useRateSelect from '../../../hooks/useRateSelect';
import RateSelectUI from '../common/RateSelectUI';

const ExpTitle = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: expRateState,
    rateName: RATE_NAME.EXP_TITLE,
  });

  const rateOption: RateSelectOption = {
    label: '경험치 칭호',
    key: RATE_NAME.EXP_TITLE,
    values: [
      { value: 0, label: '미적용' },
      { value: 10, label: '쑥쑥 새싹 (+10%)' },
      { value: 10, label: 'Eternal Flame (+10%)' },
      { value: 20, label: 'Infinite Flame (+20%)' },
      { value: 20, label: 'LET"S MAPLE (+20%)' },
      { value: 30, label: '엘 클리어 (+30%)' },
      { value: 40, label: '시그너스 기사단 (+40%)' },
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
