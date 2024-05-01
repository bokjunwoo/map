import { mesoDropState } from '../../../atoms/mesoDropState';
import { REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import { RateInputOption } from '../../../interface/rate';
import RateInputUI from '../common/RateInputUI';

const MesoDropEquipmentItem = () => {
  const { value, handleRateChange } = useRateInput({
    regex: REGEX.NUMBER,
    maxAllowedValue: 100,
    state: mesoDropState,
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
