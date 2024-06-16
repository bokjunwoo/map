import { mesoDropState, rateValueSelector } from '../../../atoms/mesoDropState';
import { RATE_NAME, REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import RateInputUI from '../common/RateInputUI';

const MesoDropAbility = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: mesoDropState,
    rateName: RATE_NAME.ABILITY,
    regex: REGEX.NUMBER,
    maxAllowedValue: 20,
  });

  const rateOption: RateInputOption = {
    label: '어빌리티(메획)',
    key: RATE_NAME.ABILITY,
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
