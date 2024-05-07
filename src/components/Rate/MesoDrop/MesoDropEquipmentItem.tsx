import { mesoDropState, rateValueSelector } from '../../../atoms/mesoDropState';
import { REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import { RateInputOption } from '../../../interface/rate';
import RateInputUI from '../common/RateInputUI';

const MesoDropEquipmentItem = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: mesoDropState,
    rateName: 'equipment_item',
    regex: REGEX.NUMBER_AND_DOT,
    maxAllowedValue: 100,
  });

  const rateOption: RateInputOption = {
    label: '장착 아이템(메획)',
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

export default MesoDropEquipmentItem;
