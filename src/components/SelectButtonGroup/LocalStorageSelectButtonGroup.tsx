import { useLocalStorage } from '../../hooks/useLocalStorage';
import { LocalStorageSelectButtonGroupProps } from './types';
import SelectButtonGroup from './UI/SelectButtonGroupUI';

const LocalStorageSelectButtonGroup = ({
  options,
  defaultOptionValue,
  localStorageKey,
  fullWidth,
  colorVariant,
}: LocalStorageSelectButtonGroupProps) => {
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

export default LocalStorageSelectButtonGroup;
