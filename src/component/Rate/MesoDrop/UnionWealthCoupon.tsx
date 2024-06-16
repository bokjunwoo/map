import { mesoDropState, rateValueSelector } from '../../../atoms/mesoDropState';
import { RATE_NAME } from '../../../constants/constants';
import useRateSelect from '../../../hooks/useRateSelect';
import RateSelectUI from '../common/RateSelectUI';

const UnionWealthCoupon = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: mesoDropState,
    rateName: RATE_NAME.UNION_WEALTH_COUPON,
  });

  const rateOption: RateSelectOption = {
    label: '유니온의 부',
    key: RATE_NAME.UNION_WEALTH_COUPON,
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

export default UnionWealthCoupon;
