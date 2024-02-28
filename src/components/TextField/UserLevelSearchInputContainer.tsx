import { ChangeEvent, useEffect, useState } from 'react';
import { LEVEL_RANGE, REGEX } from '../../constants/constants';
import { useLevelState } from '../../contexts/LevelStateProvider';
import UserLevelSearchInputUI from './UserLevelSearchInputUI';

const UserLevelSearchInputContainer = () => {
  const { level, setLevel } = useLevelState();
  const [inputValue, setInputValue] = useState(level);
  const [error, setError] = useState(false);

  const handleLevelValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputLevel = Number(event.target.value);
    const isValidInput = REGEX.NUMBER_UP_TO_THREE_DIGITS_REGEX.test(
      inputLevel.toString()
    );
    if (inputLevel > 300) return setInputValue(300);

    if (!isValidInput) return;
    setInputValue(inputLevel);
    setError(inputLevel < LEVEL_RANGE.MIN || inputLevel > LEVEL_RANGE.MAX);
  };

  const handleBlur = () => {
    if (inputValue < LEVEL_RANGE.MIN || inputValue > LEVEL_RANGE.MAX) {
      setInputValue(level);
      setError(true);
    } else {
      setLevel(inputValue);
      setError(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleBlur();
    }
  };

  useEffect(() => {
    if (level < LEVEL_RANGE.MIN || level > LEVEL_RANGE.MAX) setError(false);
  }, [level]);

  return (
    <UserLevelSearchInputUI
      error={error}
      handleLevelValueChange={handleLevelValueChange}
      handleBlur={handleBlur}
      handleKeyDown={handleKeyDown}
      inputValue={inputValue}
    />
  );
};

export default UserLevelSearchInputContainer;
