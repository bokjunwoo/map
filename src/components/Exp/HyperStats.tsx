import { REGEX } from '../../constants/constants';
import useExpInput from '../../hooks/useExpInput';
import { ExpInputOption } from '../../interface/exp';
import ExpInputUI from './ExpInputUI';

const HyperStats = () => {
  const { expName, handleExpChange } = useExpInput({
    regex: REGEX.NUMBER_AND_DOT,
    maxAllowedValue: 10,
  });

  const expOptions: ExpInputOption = {
    label: '하이퍼 스탯',
    key: 'hyper_stats',
  };

  return (
    <ExpInputUI
      options={expOptions}
      value={expName}
      handleChange={handleExpChange}
    />
  );
};

export default HyperStats;
