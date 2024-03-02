import useExpSelect from '../../hooks/useExpSelect';
import { ExpSelectOption } from '../../interface/exp';
import ExpSelectUI from './ExpSelectUI';

const ElvenBlessing = () => {
  const { expName, handleExpChange } = useExpSelect();

  const expOptions: ExpSelectOption = {
    label: '엘프의 축복',
    key: 'elven_blessing',
    values: [
      { value: 0, label: '미적용' },
      { value: 10, label: '1레벨 (+10%)' },
      { value: 15, label: '2레벨 (+15%)' },
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

export default ElvenBlessing;
