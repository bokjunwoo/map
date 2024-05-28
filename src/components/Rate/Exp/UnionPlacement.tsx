import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import { REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import RateInputUI from '../common/RateInputUI';

const UnionPlacement = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: expRateState,
    rateName: 'union_placement',
    regex: REGEX.NUMBER_AND_DOT,
    maxAllowedValue: 10,
  });

  const rateOption: RateInputOption = {
    label: '유니온 경험치 배치',
    key: 'union_placement',
  };

  return (
    <RateInputUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default UnionPlacement;
