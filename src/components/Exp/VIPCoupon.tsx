import useExpSelect from '../../hooks/useExpSelect';
import { ExpSelectOption } from '../../interface/exp';
import ExpSelectUI from './UI/ExpSelectUI';

const VIPCoupon = () => {
  const { expName, handleExpChange } = useExpSelect();

  const expOptions: ExpSelectOption = {
    label: 'VIP 쿠폰',
    key: 'VIP_coupon',
    values: [
      { value: 0, label: '미적용' },
      { value: 15, label: '적용 (+15%)' },
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

export default VIPCoupon;
