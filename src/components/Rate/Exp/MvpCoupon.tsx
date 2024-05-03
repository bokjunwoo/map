import { expRateState } from '../../../atoms/expRateState';
import useRateSelect from '../../../hooks/useRateSelect';
import { RateSelectOption } from '../../../interface/rate';
import RateSelectUI from '../common/RateSelectUI';

const MvpCoupon = () => {
  const { value, handleRateChange } = useRateSelect({
    state: expRateState,
    rateName: 'mvp_coupon',
  });

  const rateOption: RateSelectOption = {
    label: '뿌리기 / MVP 쿠폰',
    key: 'mvp_coupon',
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
