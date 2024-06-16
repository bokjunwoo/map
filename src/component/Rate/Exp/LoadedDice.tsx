import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import { RATE_NAME } from '../../../constants/constants';
import useRateSelect from '../../../hooks/useRateSelect';
import RateSelectUI from '../common/RateSelectUI';

const LoadedDice = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: expRateState,
    rateName: RATE_NAME.LOADED_DICE,
  });

  const rateOption: RateSelectOption = {
    label: '로디드 다이스',
    key: RATE_NAME.LOADED_DICE,
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
