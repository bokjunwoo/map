import { ButtonGroup, Button } from '@mui/material';
import { blackStyles, grayStyles } from '../../../style/buttonStyles';
import { SelectButtonGroupUIProps } from '../types';

const SelectButtonGroupUI = ({
  options,
  selectedOption,
  onOptionSelect,
  fullWidth,
  colorVariant,
}: SelectButtonGroupUIProps) => {
  const styles = colorVariant === 'black' ? blackStyles : grayStyles;

  return (
    <ButtonGroup
      variant="outlined"
      aria-label="button_group"
      fullWidth={fullWidth}
    >
      {options.map((option, index) => {
        const isSelected = option === selectedOption;
        return (
          <Button
            key={index}
            color="inherit"
            sx={{
              ...styles.button,
              ...(isSelected ? styles.selectedButton : {}),
            }}
            onClick={() => onOptionSelect(option)}
          >
            {option}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default SelectButtonGroupUI;
