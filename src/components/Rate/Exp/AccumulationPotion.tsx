import { expRateState } from '../../../atoms/expRateState';
import useRateSelect from '../../../hooks/useRateSelect';
import { RateSelectOption } from '../../../interface/rate';
import RateSelectUI from '../common/RateSelectUI';

const AccumulationPotion = () => {
  const { value, handleRateChange } = useRateSelect({
    state: expRateState,
    rateName: 'accumulation_potion',
  });

  const rateOption: RateSelectOption = {
    label: '경험 축적의 비약',
    key: 'accumulation_potion',
    values: [
      { value: 0, label: '미적용' },
      { value: 10, label: '경축비 (+10%)' },
      { value: 20, label: '고농축 경축비 (+20%)' },
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

export default AccumulationPotion;
