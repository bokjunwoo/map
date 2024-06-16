import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import { RATE_NAME } from '../../../constants/constants';
import useRateSelect from '../../../hooks/useRateSelect';
import RateSelectUI from '../common/RateSelectUI';

const ExtremeGoldPotion = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: expRateState,
    rateName: RATE_NAME.EXTREME_GOLD_POTION,
  });

  const rateOption: RateSelectOption = {
    label: '익스트림 골드(몬파)',
    key: RATE_NAME.EXTREME_GOLD_POTION,
    values: [
      { value: 0, label: '미적용' },
      { value: 10, label: '적용 (+10%)' },
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
