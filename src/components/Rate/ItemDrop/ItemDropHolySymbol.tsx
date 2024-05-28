import { itemDropState, rateValueSelector } from '../../../atoms/itemDropState';
import { REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import RateInputUI from '../common/RateInputUI';

const ItemDropHolySymbol = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: itemDropState,
    rateName: 'holy_symbol',
    regex: REGEX.NUMBER,
    maxAllowedValue: 30,
  });

  const rateOption: RateInputOption = {
    label: '쓸만한 홀리심볼(아드)',
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

export default ItemDropHolySymbol;
