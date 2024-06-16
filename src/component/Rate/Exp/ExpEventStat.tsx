import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import { RATE_NAME } from '../../../constants/constants';
import useRateSelect from '../../../hooks/useRateSelect';
import RateSelectUI from '../common/RateSelectUI';

const ExpEventStat = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: expRateState,
    rateName: RATE_NAME.EXP_EVENT_STAT,
  });

  const rateOption: RateSelectOption = {
    label: '이벤트 버프(마약)',
    key: RATE_NAME.EXP_EVENT_STAT,
    values: [
      { value: 0, label: '미적용' },
      { value: 2.5, label: '1레벨 (+2.5%)' },
      { value: 5, label: '2레벨 (+5%)' },
      { value: 7.5, label: '3레벨 (+7.5%)' },
      { value: 10, label: '4레벨 (+10%)' },
      { value: 12.5, label: '5레벨 (+12.5%)' },
      { value: 15, label: '6레벨 (+15%)' },
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

export default ExpEventStat;
