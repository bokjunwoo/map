import { expRateState } from '../../../atoms/expRateState';
import useRateSelect from '../../../hooks/useRateSelect';
import { RateSelectOption } from '../../../interface/rate';
import RateSelectUI from '../common/RateSelectUI';

const ElvenBlessing = () => {
  const { value, handleRateChange } = useRateSelect({
    state: expRateState,
    rateName: 'elven_blessing',
  });

  const rateOption: RateSelectOption = {
    label: '엘프의 축복',
    key: 'elven_blessing',
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
