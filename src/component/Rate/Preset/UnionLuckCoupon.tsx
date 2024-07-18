import { RATE_NAME } from '../../../constants/constants';
import usePresetRateSelcet from '../../../hooks/usePresetRateSelcet';
import RateSelectUI from '../common/RateSelectUI';

const UnionLuckCoupon = () => {
  const { value, handleRateChange } = usePresetRateSelcet({
    rateName: RATE_NAME.UNION_LUCK_COUPON,
    key: 'item_drop_rate_preset',
  });

  const rateOption: RateSelectOption = {
    label: '유니온의 행운',
    key: RATE_NAME.UNION_LUCK_COUPON,
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

export default UnionLuckCoupon;
