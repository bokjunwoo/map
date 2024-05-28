import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import { REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import RateInputUI from '../common/RateInputUI';

const ExpUnionArtifact = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: expRateState,
    rateName: 'union_artifact',
    regex: REGEX.NUMBER_AND_DOT,
    maxAllowedValue: 12,
  });

  const rateOption: RateInputOption = {
    label: '아티팩트(경험치)',
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

export default ExpUnionArtifact;
