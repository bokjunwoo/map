import useExpSelect from '../../hooks/useExpSelect';
import { ExpSelectOption } from '../../interface/exp';
import ExpSelectUI from './UI/ExpSelectUI';

const KinshipRing = () => {
  const { expName, handleExpChange } = useExpSelect();

  const expOptions: ExpSelectOption = {
    label: '혈맹의 반지',
    key: 'kinship_ring',
    values: [
      { value: 0, label: '미적용' },
      { value: 10, label: '착용 (+10%)' },
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

export default KinshipRing;
