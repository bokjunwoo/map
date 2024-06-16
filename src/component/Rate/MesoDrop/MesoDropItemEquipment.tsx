import { mesoDropState, rateValueSelector } from '../../../atoms/mesoDropState';
import { RATE_NAME, REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import RateInputUI from '../common/RateInputUI';

const ItemDropItemEquipment = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: mesoDropState,
    rateName: RATE_NAME.ITEM_EQUIPMENT,
    regex: REGEX.NUMBER_AND_DOT,
    maxAllowedValue: 100,
  });

  const rateOption: RateInputOption = {
    label: '장착 아이템(메획)',
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
