import { itemDropState } from '../../../atoms/itemDropState';
import useRateSelect from '../../../hooks/useRateSelect';
import { RateSelectOption } from '../../../interface/rate';
import RateSelectUI from '../common/RateSelectUI';

const UnionLuckCoupon = () => {
  const { value, handleRateChange } = useRateSelect(itemDropState);

  const rateOption: RateSelectOption = {
    label: '유니온의 행운',
    key: 'union_luck_coupon',
    values: [
      { value: 0, label: '미적용' },
      { value: 50, label: '+50%' },
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

export default UnionLuckCoupon;
