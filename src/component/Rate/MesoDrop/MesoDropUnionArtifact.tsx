import { mesoDropState, rateValueSelector } from '../../../atoms/mesoDropState';
import { RATE_NAME, REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import RateInputUI from '../common/RateInputUI';

const MesoDropUnionArtifact = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: mesoDropState,
    rateName: RATE_NAME.UNION_ARTIFACT,
    regex: REGEX.NUMBER,
    maxAllowedValue: 12,
  });

  const rateOption: RateInputOption = {
    label: '유니온 아티팩트(메획)',
    key: RATE_NAME.UNION_ARTIFACT,
  };

  return (
    <RateInputUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default MesoDropUnionArtifact;
