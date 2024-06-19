import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import { RATE_NAME, REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import RateInputUI from '../common/RateInputUI';

const SolJanus = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: expRateState,
    rateName: RATE_NAME.SOL_JANUS,
    regex: REGEX.NUMBER,
    maxAllowedValue: 100,
  });

  const rateOption: RateInputOption = {
    label: '솔 야누스',
    key: RATE_NAME.SOL_JANUS,
  };

  return (
    <RateInputUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default SolJanus;
