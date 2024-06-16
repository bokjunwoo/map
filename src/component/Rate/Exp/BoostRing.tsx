import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import { RATE_NAME } from '../../../constants/constants';
import useRateSelect from '../../../hooks/useRateSelect';
import RateSelectUI from '../common/RateSelectUI';

const BoostRing = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: expRateState,
    rateName: RATE_NAME.BOOST_RING,
  });

  const rateOption: RateSelectOption = {
    label: '경험치 부스트 링',
    key: RATE_NAME.BOOST_RING,
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
