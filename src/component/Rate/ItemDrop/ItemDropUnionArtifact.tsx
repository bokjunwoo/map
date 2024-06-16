import { itemDropState, rateValueSelector } from '../../../atoms/itemDropState';
import { RATE_NAME, REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import RateInputUI from '../common/RateInputUI';

const ItemDropUnionArtifact = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: itemDropState,
    rateName: RATE_NAME.UNION_ARTIFACT,
    regex: REGEX.NUMBER,
    maxAllowedValue: 12,
  });

  const rateOption: RateInputOption = {
    label: '유니온 아티팩트(아드)',
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

export default ItemDropUnionArtifact;
