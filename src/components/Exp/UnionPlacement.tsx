import { REGEX } from '../../constants/constants';
import useExpInput from '../../hooks/useExpInput';
import { ExpInputOption } from '../../interface/exp';
import ExpInputUI from './UI/ExpInputUI';

const UnionPlacement = () => {
  const { expName, handleExpChange } = useExpInput({
    regex: REGEX.NUMBER_AND_DOT,
    maxAllowedValue: 10,
  });

  const expOptions: ExpInputOption = {
    label: '유니온 배치',
    key: 'union_placement',
  };

  return (
    <ExpInputUI
      options={expOptions}
      value={expName}
      handleChange={handleExpChange}
    />
  );
};

export default UnionPlacement;
