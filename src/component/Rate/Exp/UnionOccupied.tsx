import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import { RATE_NAME, REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import RateInputUI from '../common/RateInputUI';

const UnionOccupied = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: expRateState,
    rateName: RATE_NAME.UNION_OCCUPIED,
    regex: REGEX.NUMBER_AND_DOT,
    maxAllowedValue: 10,
  });

  const rateOption: RateInputOption = {
    label: '유니온 경험치칸 배치',
    key: RATE_NAME.UNION_OCCUPIED,
  };

  return (
    <RateInputUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default UnionOccupied;
