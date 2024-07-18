import { RATE_NAME } from '../../../constants/constants';
import usePresetRateSelcet from '../../../hooks/usePresetRateSelcet';
import RateSelectUI from '../common/RateSelectUI';

const AccumulationPotion = () => {
  const { value, handleRateChange } = usePresetRateSelcet({
    rateName: RATE_NAME.ACCUMULATION_POTION,
    key: 'exp_rate_preset',
  });

  const rateOption: RateSelectOption = {
    label: '경험 축적의 비약',
    key: RATE_NAME.ACCUMULATION_POTION,
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
