import { ChangeEvent, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { numberOfMonsterState } from '../../atoms/numberOfMonsterState';
import { REGEX } from '../../constants/constants';
import { MapInfo } from '../../interface/map';
import InputAdornmentUI from './UI/InputAdornmentUI';

type NumberOfMonsterInputProps = {
  item: MapInfo;
  text: string;
};

const NumberOfMonsterInput = ({ item, text }: NumberOfMonsterInputProps) => {
  const [numberOfMonster, setNumberOfMonster] = useRecoilState(
    numberOfMonsterState(item.map_name)
  );
  const handleNumberOfMonsterChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const targetValue = Number(event.target.value);

    if (REGEX.NUMBER.test(targetValue.toString())) {
      setNumberOfMonster(targetValue);
    }

    if (targetValue > item.number_of_monster) {
      setNumberOfMonster(item.number_of_monster);
    }
  };

  useEffect(() => {
    setNumberOfMonster(item.number_of_monster);
  }, [item.number_of_monster, setNumberOfMonster]);

  return (
    <InputAdornmentUI
      text={text}
      adornment={item.number_of_monster}
      value={numberOfMonster}
      onChange={handleNumberOfMonsterChange}
    />
  );
};

export default NumberOfMonsterInput;
