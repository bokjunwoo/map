import { SelectChangeEvent } from '@mui/material';
import { useState, ChangeEvent } from 'react';
import { REGEX } from '../../constants/constants';
import { useExpRateValue } from '../../contexts/ExpRateStateProvider';
import { MapInfo } from '../../interface/map';
import { SelectOptions } from '../../interface/select';
import MapBoosterUI from './UI/MapBoosterUI';

const MapBooster = ({ item }: { item: MapInfo }) => {
  const expRate = useExpRateValue();

  const highestLevelMonster = item.monsters.reduce((prev, curr) => {
    return prev.level > curr.level ? prev : curr;
  });

  const [selectedValue, setSelectedValue] = useState(1);
  const [numberOfMonster, setNumberOfMonster] = useState(180);

  const selectOptions: SelectOptions = {
    label: '사용횟수',
    values: Array.from({ length: 10 }, (_, i) => ({
      value: i + 1,
      label: `${i + 1}`,
    })),
  };

  const handleNumberOfMonsterValue = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = Number(event.target.value);
    console.log(targetValue);

    if (REGEX.NUMBER.test(targetValue.toString())) {
      setNumberOfMonster(targetValue);
    }

    if (targetValue > 180) {
      setNumberOfMonster(180);
    }
  };

  const handleSelectChange = (event: SelectChangeEvent<number>) => {
    setSelectedValue(Number(event.target.value));
  };

  return (
    <MapBoosterUI
      highestLevelMonster={highestLevelMonster}
      selectOptions={selectOptions}
      selectedValue={selectedValue}
      numberOfMonster={numberOfMonster}
      handleSelectChange={handleSelectChange}
      handleNumberOfMonsterValue={handleNumberOfMonsterValue}
      item={item}
      expRate={expRate}
    />
  );
};

export default MapBooster;
