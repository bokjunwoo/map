import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import { RATE_NAME } from '../../../constants/constants';
import useRateSelect from '../../../hooks/useRateSelect';
import RateSelectUI from '../common/RateSelectUI';

const ElvenBlessing = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: expRateState,
    rateName: RATE_NAME.ELVEN_BLESSING,
  });

  const rateOption: RateSelectOption = {
    label: '엘프의 축복',
    key: RATE_NAME.ELVEN_BLESSING,
    values: [
      { value: 0, label: '미적용' },
      { value: 10, label: '1레벨 (+10%)' },
      { value: 15, label: '2레벨 (+15%)' },
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

export default ElvenBlessing;
