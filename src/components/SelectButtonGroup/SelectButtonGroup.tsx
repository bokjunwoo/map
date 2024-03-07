import { useState } from 'react';
import { SelectButtonGroupProps } from './types';
import SelectButtonGroupUI from './UI/SelectButtonGroupUI';

const SelectButtonGroup = ({
  options,
  defaultOptionValue,
  fullWidth,
  colorVariant,
}: SelectButtonGroupProps) => {
  const [selected, setSelected] = useState(defaultOptionValue);

  const handleOptionSelect = (optionValue: string) => {
    setSelected(optionValue);
  };

  return (
    <SelectButtonGroupUI
      options={options}
      selectedOption={selected}
      onOptionSelect={handleOptionSelect}
      fullWidth={fullWidth}
      colorVariant={colorVariant}
    />
  );
};

export default SelectButtonGroup;
