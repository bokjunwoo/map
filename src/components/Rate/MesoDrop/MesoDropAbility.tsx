import { mesoDropState } from '../../../atoms/mesoDropState';
import { REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import { RateInputOption } from '../../../interface/rate';
import RateInputUI from '../common/RateInputUI';

const MesoDropAbility = () => {
  const { value, handleRateChange } = useRateInput({
    regex: REGEX.NUMBER,
    maxAllowedValue: 20,
    state: mesoDropState,
  });

  const rateOption: RateInputOption = {
    label: '어빌리티(메획)',
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

export default MesoDropAbility;
