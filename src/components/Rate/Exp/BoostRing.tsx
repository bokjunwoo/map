import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import useRateSelect from '../../../hooks/useRateSelect';
import RateSelectUI from '../common/RateSelectUI';

const BoostRing = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: expRateState,
    rateName: 'boost_ring',
  });

  const rateOption: RateSelectOption = {
    label: '경험치 부스트 링',
    key: 'boost_ring',
    values: [
      { value: 0, label: '미적용' },
      { value: 15, label: '착용 (+15%)' },
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

export default BoostRing;
