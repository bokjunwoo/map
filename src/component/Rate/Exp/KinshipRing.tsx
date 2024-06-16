import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import { RATE_NAME } from '../../../constants/constants';
import useRateSelect from '../../../hooks/useRateSelect';
import RateSelectUI from '../common/RateSelectUI';

const KinshipRing = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: expRateState,
    rateName: RATE_NAME.KINSHIP_RING,
  });

  const rateOption: RateSelectOption = {
    label: '혈맹의 반지',
    key: RATE_NAME.KINSHIP_RING,
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
