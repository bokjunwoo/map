import { itemDropState } from '../../../atoms/itemDropState';
import { REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import { RateInputOption } from '../../../interface/rate';
import RateInputUI from '../common/RateInputUI';

const ItemDropEquipmentItem = () => {
  const { value, handleRateChange } = useRateInput({
    state: itemDropState,
    rateName: 'equipment_item',
    regex: REGEX.NUMBER_AND_DOT,
    maxAllowedValue: 200,
  });

  const rateOption: RateInputOption = {
    label: '장착 아이템(아드)',
    key: 'equipment_item',
  };

  return (
    <RateInputUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default ItemDropEquipmentItem;
