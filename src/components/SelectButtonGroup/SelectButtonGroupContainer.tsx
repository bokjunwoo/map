import { useState, useEffect } from 'react';
import SelectButtonGroup from './UI/SelectButtonGroup';

type SelectButtonGroupContainerProps = {
  options: string[];
  defaultOptionValue: string;
  localStorageKey: string;
  fullWidth: boolean;
  colorVariant: 'black' | 'gray';
};

const SelectButtonGroupContainer = ({
  options,
  defaultOptionValue,
  localStorageKey,
  fullWidth,
  colorVariant,
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
      fullWidth={fullWidth}
      colorVariant={colorVariant}
    />
  );
};

export default SelectButtonGroupContainer;
