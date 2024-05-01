import { expRateState } from '../../../atoms/expRateState';
import useRateSelect from '../../../hooks/useRateSelect';
import { RateSelectOption } from '../../../interface/rate';
import RateSelectUI from '../common/RateSelectUI';

const KinshipRing = () => {
  const { value, handleRateChange } = useRateSelect(expRateState);

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
