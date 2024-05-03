import { expRateState } from '../../../atoms/expRateState';
import { REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import { RateInputOption } from '../../../interface/rate';
import RateInputUI from '../common/RateInputUI';

const ExpHolySymbol = () => {
  const { value, handleRateChange } = useRateInput({
    state: expRateState,
    rateName: 'holy_symbol',
    regex: REGEX.NUMBER,
    maxAllowedValue: 35,
  });

  const rateOption: RateInputOption = {
    label: '쓸만한 홀리 심볼',
    key: 'holy_symbol',
  };

  return (
    <RateInputUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default ExpHolySymbol;
