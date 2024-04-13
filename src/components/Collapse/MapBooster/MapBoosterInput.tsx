import { ChangeEvent } from 'react';
import { REGEX } from '../../../constants/constants';
import MapBoosterInputUI from './UI/MapBoosterInputUI';

type MapBoosterInputProps = {
  numberOfMonster: number;
  setNumberOfMonster: React.Dispatch<React.SetStateAction<number>>;
};

const MapBoosterInput = ({
  numberOfMonster,
  setNumberOfMonster,
}: MapBoosterInputProps) => {
  const handleNumberOfMonsterValue = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = Number(event.target.value);

    if (REGEX.NUMBER.test(targetValue.toString())) {
      setNumberOfMonster(targetValue);
    }

    if (targetValue > 180) {
      setNumberOfMonster(180);
    }
  };
  return (
    <MapBoosterInputUI
      initialNumberOfMonster={180}
      numberOfMonster={numberOfMonster}
      handleNumberOfMonsterChange={handleNumberOfMonsterValue}
    />
  );
};

export default MapBoosterInput;
