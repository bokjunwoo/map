import useExpSelect from '../../hooks/useExpSelect';
import { ExpSelectOption } from '../../interface/exp';
import ExpSelectUI from './ExpSelectUI';

const MvpCoupon = () => {
  const { expName, handleExpChange } = useExpSelect();

  const expOptions: ExpSelectOption = {
    label: '뿌리기 / MVP 쿠폰',
    key: 'mvp_coupon',
    values: [
      { value: 0, label: '미적용' },
      { value: 50, label: '사용 (+50%)' },
    ],
  };

  return (
    <ExpSelectUI
      options={expOptions}
      value={expName}
      handleChange={handleExpChange}
    />
  );
};

export default MvpCoupon;
