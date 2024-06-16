import { itemDropState, rateValueSelector } from '../../../atoms/itemDropState';
import { RATE_NAME, REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import RateInputUI from '../common/RateInputUI';

const ItemDropItemEquipment = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: itemDropState,
    rateName: RATE_NAME.ITEM_EQUIPMENT,
    regex: REGEX.NUMBER_AND_DOT,
    maxAllowedValue: 200,
  });

  const rateOption: RateInputOption = {
    label: '장착 아이템(아드)',
    key: RATE_NAME.ITEM_EQUIPMENT,
  };

  return (
    <RateInputUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default ItemDropItemEquipment;
