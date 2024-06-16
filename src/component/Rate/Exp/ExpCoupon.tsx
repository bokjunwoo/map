import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import { RATE_NAME } from '../../../constants/constants';
import useRateSelect from '../../../hooks/useRateSelect';
import RateSelectUI from '../common/RateSelectUI';

const ExpCoupon = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: expRateState,
    rateName: RATE_NAME.EXP_COUPON,
  });

  const rateOption: RateSelectOption = {
    label: '경험치 쿠폰',
    key: RATE_NAME.EXP_COUPON,
    values: [
      { value: 0, label: '미적용' },
      { value: 50, label: '1.5배 쿠폰 (+50%)' },
      { value: 100, label: '2배 쿠폰 (+100%)' },
      { value: 200, label: '3배 쿠폰 (+200%)' },
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

export default ExpCoupon;
