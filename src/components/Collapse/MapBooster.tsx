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

  const [numberOfMonster, setNumberOfMonster] = useState(180);
  const [selectedBoosterValue, setSelectedBoosterValue] = useState(1);
  const [selectedRuneValue, setSelectedRuneValue] = useState(0);
  const [accumulationPotionPrice, setAccumulationPotionPrice] = useState(350);

  const selectBoosterOptions: SelectOptions = {
    label: '사용횟수',
    values: Array.from({ length: 10 }, (_, i) => ({
      value: i + 1,
      label: `${i + 1}`,
    })),
  };

  const selectedRuneOption: SelectOptions = {
    label: '룬 설정',
    values: [
      { value: 0, label: '룬 X' },
      { value: 100, label: '룬 2배' },
      { value: 200, label: '룬 3배' },
    ],
  };

  const handleNumberOfMonsterValue = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = Number(event.target.value);

    if (REGEX.NUMBER.test(targetValue.toString())) {
      setNumberOfMonster(targetValue);
    }

    if (targetValue > 180) {
      setNumberOfMonster(180);
    }
  };

  const handleSelectBoosterChange = (event: SelectChangeEvent<number>) => {
    setSelectedBoosterValue(Number(event.target.value));
  };

  const handleSelectRuneChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedRuneValue(Number(event.target.value));
  };

  const handleAccumulationPotionPriceChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const targetValue = Number(event.target.value);

    if (REGEX.NUMBER_UP_TO_THREE_DIGITS_REGEX.test(targetValue.toString())) {
      setAccumulationPotionPrice(targetValue);
    }
  };

  return (
    <MapBoosterUI
      highestLevelMonster={highestLevelMonster}
      selectBoosterOptions={selectBoosterOptions}
      selectedRuneOption={selectedRuneOption}
      selectedBoosterValue={selectedBoosterValue}
      selectedRuneValue={selectedRuneValue}
      numberOfMonster={numberOfMonster}
      accumulationPotionPrice={accumulationPotionPrice}
      handleNumberOfMonsterValue={handleNumberOfMonsterValue}
      handleSelectBoosterChange={handleSelectBoosterChange}
      handleSelectRuneChange={handleSelectRuneChange}
      handleAccumulationPotionPriceChange={handleAccumulationPotionPriceChange}
      item={item}
      expRate={expRate}
    />
  );
};

export default MapBooster;
