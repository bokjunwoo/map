import useExpSelect from '../../hooks/useExpSelect';
import { ExpSelectOption } from '../../interface/exp';
import ExpSelectUI from './ExpSelectUI';

const AccumulationPotion = () => {
  const { expName, handleExpChange } = useExpSelect();

  const expOptions: ExpSelectOption = {
    label: '경험 축적의 비약',
    key: 'accumulation_potion',
    values: [
      { value: 0, label: '미적용' },
      { value: 10, label: '경축비 (+10%)' },
      { value: 20, label: '고농축 경축비 (+20%)' },
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

export default AccumulationPotion;
