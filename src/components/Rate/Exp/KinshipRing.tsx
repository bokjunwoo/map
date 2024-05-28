import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import useRateSelect from '../../../hooks/useRateSelect';
import RateSelectUI from '../common/RateSelectUI';

const KinshipRing = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: expRateState,
    rateName: 'kinship_ring',
  });

  const rateOption: RateSelectOption = {
    label: '혈맹의 반지',
    key: 'kinship_ring',
    values: [
      { value: 0, label: '미적용' },
      { value: 10, label: '착용 (+10%)' },
    ],
  };

  return (
    <RateSelectUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default KinshipRing;
