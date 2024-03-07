import { useLocalStorage } from '../../hooks/useLocalStorage';
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
  const { storedValue, setStoredValue } = useLocalStorage(
    localStorageKey,
    defaultOptionValue,
    options
  );

  const handleOptionSelect = (optionValue: string) => {
    setStoredValue(optionValue);
  };

  return (
    <SelectButtonGroup
      options={options}
      selectedOption={storedValue}
      onOptionSelect={handleOptionSelect}
      fullWidth={fullWidth}
      colorVariant={colorVariant}
    />
  );
};

export default SelectButtonGroupContainer;
