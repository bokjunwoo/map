import { itemDropState, rateValueSelector } from '../../../atoms/itemDropState';
import { REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import RateInputUI from '../common/RateInputUI';

const ItemDropAbility = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: itemDropState,
    rateName: 'ability',
    regex: REGEX.NUMBER,
    maxAllowedValue: 20,
  });

  const rateOption: RateInputOption = {
    label: '어빌리티(아드)',
    key: 'ability',
  };

  return (
    <RateInputUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default ItemDropAbility;
