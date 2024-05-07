import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import useRateSelect from '../../../hooks/useRateSelect';
import { RateSelectOption } from '../../../interface/rate';
import RateSelectUI from '../common/RateSelectUI';

const VIPCoupon = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: expRateState,
    rateName: 'VIP_coupon',
  });

  const rateOption: RateSelectOption = {
    label: 'VIP 쿠폰',
    key: 'VIP_coupon',
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
