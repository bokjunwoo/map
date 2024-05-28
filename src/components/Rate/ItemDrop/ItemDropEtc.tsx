import { itemDropState, rateValueSelector } from '../../../atoms/itemDropState';
import { REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import RateInputUI from '../common/RateInputUI';

const ItemDropEtc = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: itemDropState,
    rateName: 'item_drop_etc',
    regex: REGEX.NUMBER,
    maxAllowedValue: 400,
  });

  const rateOption: RateInputOption = {
    label: '기타(아드)',
    key: 'item_drop_etc',
  };

  return (
    <RateInputUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default ItemDropEtc;
