import { RATE_NAME } from '../../../constants/constants';
import usePresetRateSelcet from '../../../hooks/usePresetRateSelcet';
import RateSelectUI from '../common/RateSelectUI';

const VIPCoupon = () => {
  const { value, handleRateChange } = usePresetRateSelcet({
    rateName: RATE_NAME.VIP_COUPON,
    key: 'exp_rate_preset',
  });

  const rateOption: RateSelectOption = {
    label: 'VIP 쿠폰',
    key: RATE_NAME.VIP_COUPON,
    values: [
      { value: 0, label: '미적용' },
      { value: 15, label: '적용 (+15%)' },
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

export default VIPCoupon;
