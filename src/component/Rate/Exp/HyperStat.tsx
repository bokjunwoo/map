import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import { RATE_NAME, REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import RateInputUI from '../common/RateInputUI';

const HyperStat = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: expRateState,
    rateName: RATE_NAME.HYPER_STAT,
    regex: REGEX.NUMBER_AND_DOT,
    maxAllowedValue: 10,
  });

  const rateOption: RateInputOption = {
    label: '하이퍼 스탯',
    key: RATE_NAME.HYPER_STAT,
  };

  return (
    <RateInputUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default HyperStat;
