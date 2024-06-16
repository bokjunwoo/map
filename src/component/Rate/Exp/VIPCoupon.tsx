import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import { RATE_NAME } from '../../../constants/constants';
import useRateSelect from '../../../hooks/useRateSelect';
import RateSelectUI from '../common/RateSelectUI';

const VIPCoupon = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: expRateState,
    rateName: RATE_NAME.VIP_COUPON,
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
