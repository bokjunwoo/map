import { mesoDropState, rateValueSelector } from '../../../atoms/mesoDropState';
import { REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import { RateInputOption } from '../../../interface/rate';
import RateInputUI from '../common/RateInputUI';

const MesoDropEtc = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: mesoDropState,
    rateName: 'meso_drop_etc',
    regex: REGEX.NUMBER,
    maxAllowedValue: 300,
  });

  const rateOption: RateInputOption = {
    label: '기타(메획)',
    key: 'meso_drop_etc',
  };

  return (
    <RateInputUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default MesoDropEtc;
