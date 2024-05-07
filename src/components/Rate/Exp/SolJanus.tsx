import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import { REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import { RateInputOption } from '../../../interface/rate';
import RateInputUI from '../common/RateInputUI';

const SolJanus = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: expRateState,
    rateName: 'sol_janus',
    regex: REGEX.NUMBER,
    maxAllowedValue: 100,
  });

  const rateOption: RateInputOption = {
    label: '솔 야누스',
    key: 'sol_janus',
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
