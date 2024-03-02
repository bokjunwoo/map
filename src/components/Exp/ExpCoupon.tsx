import useExpSelect from '../../hooks/useExpSelect';
import { ExpSelectOption } from '../../interface/exp';
import ExpSelectUI from './ExpSelectUI';

const ExpCoupon = () => {
  const { expName, handleExpChange } = useExpSelect();

  const expSelectOptions: ExpSelectOption = {
    label: '경험치 쿠폰',
    key: 'exp_coupon',
    values: [
      { value: 0, label: '미적용' },
      { value: 50, label: '1.5배 쿠폰 (+50%)' },
      { value: 100, label: '2배 쿠폰 (+100%)' },
      { value: 200, label: '3배 쿠폰 (+200%)' },
    ],
  };

  return (
    <ExpSelectUI
      options={expSelectOptions}
      value={expName}
      handleChange={handleExpChange}
    />
  );
};

export default ExpCoupon;
