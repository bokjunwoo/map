import { useState } from 'react';
import { MapInfo } from '../../interface/map';
import MapBoosterUI from './UI/MapBoosterUI';

const MapBooster = ({ item }: { item: MapInfo }) => {
  const highestLevelMonster = item.monsters.reduce((prev, curr) => {
    return prev.level > curr.level ? prev : curr;
  });

  const [numberOfMonster, setNumberOfMonster] = useState(180);
  const [selectedRuneValue, setSelectedRuneValue] = useState(100);

  return (
    <MapBoosterUI
      item={item}
      highestLevelMonster={highestLevelMonster}
      selectedRuneValue={selectedRuneValue}
      setSelectedRuneValue={setSelectedRuneValue}
      numberOfMonster={numberOfMonster}
      setNumberOfMonster={setNumberOfMonster}
    />
  );
};

export default MapBooster;
