import { itemDropState, rateValueSelector } from '../../../atoms/itemDropState';
import { RATE_NAME, REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import RateInputUI from '../common/RateInputUI';

const ItemDropEtc = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: itemDropState,
    rateName: RATE_NAME.ETC_ITEM_DROP,
    regex: REGEX.NUMBER,
    maxAllowedValue: 400,
  });

  const rateOption: RateInputOption = {
    label: '기타(아드)',
    key: RATE_NAME.ETC_ITEM_DROP,
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
