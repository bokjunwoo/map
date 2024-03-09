import { REGEX } from '../../constants/constants';
import useExpInput from '../../hooks/useExpInput';
import { ExpInputOption } from '../../interface/exp';
import ExpInputUI from './UI/ExpInputUI';

const SolJanus = () => {
  const { expName, handleExpChange } = useExpInput({
    regex: REGEX.NUMBER,
    maxAllowedValue: 100,
  });

  const expOptions: ExpInputOption = {
    label: '솔 야누스',
    key: 'sol_janus',
  };

  return (
    <ExpInputUI
      options={expOptions}
      value={expName}
      handleChange={handleExpChange}
    />
  );
};

export default SolJanus;
