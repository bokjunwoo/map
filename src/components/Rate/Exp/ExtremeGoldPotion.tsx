import { expRateState } from '../../../atoms/expRateState';
import useRateSelect from '../../../hooks/useRateSelect';
import { RateSelectOption } from '../../../interface/rate';
import RateSelectUI from '../common/RateSelectUI';

const ExtremeGoldPotion = () => {
  const { value, handleRateChange } = useRateSelect(expRateState);

  const rateOption: RateSelectOption = {
    label: '익스트림 골드(몬파)',
    key: 'extreme_gold_potion',
    values: [
      { value: 0, label: '미적용' },
      { value: 10, label: '사용 (+10%)' },
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

export default ExtremeGoldPotion;
