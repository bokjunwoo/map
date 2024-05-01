import { mesoDropState } from '../../../atoms/mesoDropState';
import { REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import { RateInputOption } from '../../../interface/rate';
import RateInputUI from '../common/RateInputUI';

const MesoDropUnionArtifact = () => {
  const { value, handleRateChange } = useRateInput({
    regex: REGEX.NUMBER,
    maxAllowedValue: 12,
    state: mesoDropState,
  });

  const rateOption: RateInputOption = {
    label: '유니온 아티팩트(메획)',
    key: 'union_artifact',
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
