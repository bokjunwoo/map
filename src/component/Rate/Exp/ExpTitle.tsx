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
      { value: 10, label: '착용 (+10%)' },
      { value: 20, label: '착용 (+20%)' },
      { value: 30, label: '착용 (+30%)' },
      { value: 40, label: '착용 (+40%)' },
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
