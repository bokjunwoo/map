import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import { RATE_NAME } from '../../../constants/constants';
import useRateSelect from '../../../hooks/useRateSelect';
import RateSelectUI from '../common/RateSelectUI';

const MvpCoupon = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: expRateState,
    rateName: RATE_NAME.MVP_COUPON,
  });

  const rateOption: RateSelectOption = {
    label: '뿌리기 / MVP 쿠폰',
    key: RATE_NAME.MVP_COUPON,
    values: [
      { value: 0, label: '미적용' },
      { value: 50, label: '적용 (+50%)' },
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

export default MvpCoupon;
