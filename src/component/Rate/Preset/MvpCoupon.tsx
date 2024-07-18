import { RATE_NAME } from '../../../constants/constants';
import usePresetRateSelcet from '../../../hooks/usePresetRateSelcet';
import RateSelectUI from '../common/RateSelectUI';

const MvpCoupon = () => {
  const { value, handleRateChange } = usePresetRateSelcet({
    rateName: RATE_NAME.MVP_COUPON,
    key: 'exp_rate_preset',
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
