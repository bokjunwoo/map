import { REGEX } from '../../constants/constants';
import useExpInput from '../../hooks/useExpInput';
import { ExpInputOption } from '../../interface/exp';
import ExpInputUI from './ExpInputUI';

const HolySymbol = () => {
  const { expName, handleExpChange } = useExpInput({
    regex: REGEX.NUMBER,
    maxAllowedValue: 35,
  });

  const expOptions: ExpInputOption = {
    label: '쓸만한 홀리 심볼',
    key: 'holy_symbol',
  };

  return (
    <ExpInputUI
      options={expOptions}
      value={expName}
      handleChange={handleExpChange}
    />
  );
};

export default HolySymbol;
