import { mesoDropState, rateValueSelector } from '../../../atoms/mesoDropState';
import { RATE_NAME, REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import RateInputUI from '../common/RateInputUI';

const MesoDropEtc = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: mesoDropState,
    rateName: RATE_NAME.ETC_MESO_DROP,
    regex: REGEX.NUMBER,
    maxAllowedValue: 300,
  });

  const rateOption: RateInputOption = {
    label: '기타(메획)',
    key: RATE_NAME.ETC_MESO_DROP,
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
