import { expRateState } from '../../../atoms/expRateState';
import { REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import { RateInputOption } from '../../../interface/rate';
import RateInputUI from '../common/RateInputUI';

const SolJanus = () => {
  const { value, handleRateChange } = useRateInput({
    regex: REGEX.NUMBER,
    maxAllowedValue: 100,
    state: expRateState,
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
