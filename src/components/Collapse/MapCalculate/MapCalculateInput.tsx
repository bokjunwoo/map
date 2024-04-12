import { ChangeEvent, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { numberOfMonsterState } from '../../../atoms/numberOfMonsterState';
import { REGEX } from '../../../constants/constants';
import { MapInfo } from '../../../interface/map';
import MapCalculateInputUI from './UI/MapCalculateInputUI';

const MapCalculateInput = ({ item }: { item: MapInfo }) => {
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
    <MapCalculateInputUI
      initialNumberOfMonster={item.number_of_monster}
      numberOfMonster={numberOfMonster}
      handleNumberOfMonsterChange={handleNumberOfMonsterChange}
    />
  );
};

export default MapCalculateInput;
