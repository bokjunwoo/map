import useExpSelect from '../../hooks/useExpSelect';
import { ExpSelectOption } from '../../interface/exp';
import ExpSelectUI from './UI/ExpSelectUI';

const SpiritPendant = () => {
  const { expName, handleExpChange } = useExpSelect();

  const expOptions: ExpSelectOption = {
    label: '정령의 팬던트',
    key: 'spirit_pendant',
    values: [
      { value: 0, label: '미적용' },
      { value: 10, label: '+10%' },
      { value: 20, label: '+20%' },
      { value: 30, label: '+30%' },
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

export default SpiritPendant;
