import { itemDropState, rateValueSelector } from '../../../atoms/itemDropState';
import { REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import RateInputUI from '../common/RateInputUI';

const ItemDropUnionArtifact = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: itemDropState,
    rateName: 'union_artifact',
    regex: REGEX.NUMBER,
    maxAllowedValue: 12,
  });

  const rateOption: RateInputOption = {
    label: '유니온 아티팩트(아드)',
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

export default ItemDropUnionArtifact;
