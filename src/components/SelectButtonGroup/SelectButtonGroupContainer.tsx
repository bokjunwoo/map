import { useState, useEffect } from 'react';
import SelectButtonGroup from './SelectButtonGroup';

type SelectButtonGroupContainerProps = {
  options: string[];
  defaultOptionValue: string;
  localStorageKey: string;
};

const SelectButtonGroupContainer = ({
  options,
  defaultOptionValue,
  localStorageKey,
}: SelectButtonGroupContainerProps) => {
  const [selectedOption, setSelectedOption] = useState<string>(() => {
    const storedOption = localStorage.getItem(localStorageKey);
    return storedOption !== null ? storedOption : defaultOptionValue;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, selectedOption);
  }, [localStorageKey, selectedOption]);

  const handleOptionSelect = (optionValue: string) => {
    setSelectedOption(optionValue);
  };

  return (
    <SelectButtonGroup
      options={options}
      selectedOption={selectedOption}
      onOptionSelect={handleOptionSelect}
    />
  );
};

export default SelectButtonGroupContainer;
