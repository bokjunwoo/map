import { itemDropState, rateValueSelector } from '../../../atoms/itemDropState';
import { RATE_NAME, REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import RateInputUI from '../common/RateInputUI';

const ItemDropHolySymbol = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: itemDropState,
    rateName: RATE_NAME.HOLY_SYMBOL,
    regex: REGEX.NUMBER,
    maxAllowedValue: 30,
  });

  const rateOption: RateInputOption = {
    label: '쓸만한 홀리심볼(아드)',
    key: RATE_NAME.HOLY_SYMBOL,
  };

  return (
    <RateInputUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default ItemDropHolySymbol;
