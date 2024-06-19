import { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { regionListState } from '../../../atoms/regionListState';
import { userLevelState } from '../../../atoms/userLevelState';
import { REGEX, LEVEL_RANGE } from '../../../constants/constants';
import { minRegionsLevel } from '../../../data/region';
import CharacterLevelInputUI from './UI/CharacterLevelInputUI';

const CharacterLevelInput = () => {
  const [userLevel, setUserLevel] = useRecoilState(userLevelState);
  const setRegionList = useSetRecoilState(regionListState);

  const [inputValue, setInputValue] = useState(userLevel);
  const [error, setError] = useState(false);

  const handleLevelValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputLevel = Number(event.target.value);
    const isValidInput = REGEX.NUMBER_UP_TO_THREE_DIGITS_REGEX.test(
      inputLevel.toString()
    );
    if (inputLevel > 300) return setInputValue(300);

    if (!isValidInput) return;
    setInputValue(inputLevel);
    setRegionList([]);
    setError(inputLevel < LEVEL_RANGE.MIN || inputLevel > LEVEL_RANGE.MAX);
  };

  const handleBlur = () => {
    if (inputValue < LEVEL_RANGE.MIN || inputValue > LEVEL_RANGE.MAX) {
      setInputValue(userLevel);
      setError(true);
    } else {
      setUserLevel(inputValue);
      setError(false);
      setRegionList([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleBlur();
    }
  };

  const findNearestRegion = (userLevel: number) => {
    let minDiff = Infinity;
    let nearestRegion = '';

    for (const region in minRegionsLevel) {
      const diff = Math.abs(minRegionsLevel[region] - userLevel);
      if (diff < minDiff) {
        minDiff = diff;
        nearestRegion = region;
      }
    }

    return nearestRegion as GrandisRegion | AraneRiverRegion;
  };

  const nearestRegion = findNearestRegion(userLevel);

  useEffect(() => {
    if (userLevel < LEVEL_RANGE.MIN || userLevel > LEVEL_RANGE.MAX)
      setError(false);
    setRegionList([nearestRegion]);
  }, [userLevel, setRegionList, nearestRegion]);

  return (
    <CharacterLevelInputUI
      error={error}
      handleLevelValueChange={handleLevelValueChange}
      handleBlur={handleBlur}
      handleKeyDown={handleKeyDown}
      inputValue={inputValue}
    />
  );
};

export default CharacterLevelInput;
