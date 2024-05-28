import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import useRateSelect from '../../../hooks/useRateSelect';
import RateSelectUI from '../common/RateSelectUI';

const LoadedDice = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: expRateState,
    rateName: 'loaded_dice',
  });

  const rateOption: RateSelectOption = {
    label: '로디드 다이스',
    key: 'loaded_dice',
    values: [
      { value: 0, label: '미적용' },
      { value: 30, label: '주사위 6 (+30%)' },
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

export default LoadedDice;
