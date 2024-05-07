import { mesoDropState, rateValueSelector } from '../../../atoms/mesoDropState';
import useRateSelect from '../../../hooks/useRateSelect';
import { RateSelectOption } from '../../../interface/rate';
import RateSelectUI from '../common/RateSelectUI';

const UnionWealthCoupon = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: mesoDropState,
    rateName: 'union_wealth_coupon',
  });

  const rateOption: RateSelectOption = {
    label: '유니온의 부',
    key: 'union_wealth_coupon',
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
