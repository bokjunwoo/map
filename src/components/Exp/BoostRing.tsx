import useExpSelect from '../../hooks/useExpSelect';
import { ExpSelectOption } from '../../interface/exp';
import ExpSelectUI from './ExpSelectUI';

const BoostRing = () => {
  const { expName, handleExpChange } = useExpSelect();

  const expOptions: ExpSelectOption = {
    label: '경험치 부스트 링',
    key: 'boost_ring',
    values: [
      { value: 0, label: '미적용' },
      { value: 15, label: '착용 (+15%)' },
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

export default BoostRing;
