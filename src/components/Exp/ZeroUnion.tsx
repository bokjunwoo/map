import useExpSelect from '../../hooks/useExpSelect';
import { ExpSelectOption } from '../../interface/exp';
import ExpSelectUI from './UI/ExpSelectUI';

const ZeroUnion = () => {
  const { expName, handleExpChange } = useExpSelect();

  const expOptions: ExpSelectOption = {
    label: '제로 유니온 공격대원',
    key: 'zero_union',
    values: [
      { value: 0, label: '미적용' },
      { value: 4, label: 'B (+4%)' },
      { value: 6, label: 'A (+6%)' },
      { value: 8, label: 'S (+8%)' },
      { value: 10, label: 'SS (+10%)' },
      { value: 12, label: 'SSS (+12%)' },
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

export default ZeroUnion;
