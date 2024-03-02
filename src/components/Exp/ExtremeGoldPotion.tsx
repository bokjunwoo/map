import useExpSelect from '../../hooks/useExpSelect';
import { ExpSelectOption } from '../../interface/exp';
import ExpSelectUI from './ExpSelectUI';

const ExtremeGoldPotion = () => {
  const { expName, handleExpChange } = useExpSelect();

  const expOptions: ExpSelectOption = {
    label: '익스트림 골드(몬파)',
    key: 'extreme_gold_potion',
    values: [
      { value: 0, label: '미적용' },
      { value: 10, label: '사용 (+10%)' },
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

export default ExtremeGoldPotion;
