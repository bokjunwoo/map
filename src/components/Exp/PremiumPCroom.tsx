import useExpSelect from '../../hooks/useExpSelect';
import { ExpSelectOption } from '../../interface/exp';
import ExpSelectUI from './UI/ExpSelectUI';

const PremiumRoom = () => {
  const { expName, handleExpChange } = useExpSelect();

  const expOptions: ExpSelectOption = {
    label: '프리미엄 PC방',
    key: 'premium_room',
    values: [
      { value: 0, label: '미적용' },
      { value: 30, label: '적용 (+30%)' },
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

export default PremiumRoom;
