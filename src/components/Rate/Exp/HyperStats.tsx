import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import { REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import { RateInputOption } from '../../../interface/rate';
import RateInputUI from '../common/RateInputUI';

const HyperStats = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: expRateState,
    rateName: 'hyper_stats',
    regex: REGEX.NUMBER_AND_DOT,
    maxAllowedValue: 10,
  });

  const rateOption: RateInputOption = {
    label: '하이퍼 스탯',
    key: 'hyper_stats',
  };

  return (
    <RateInputUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default HyperStats;
