import { ButtonGroup, Button } from '@mui/material';
import { blackStyles, grayStyles } from '../../../style/buttonStyles';

type SelectButtonGroupProps = {
  options: string[];
  selectedOption: string;
  onOptionSelect: (optionValue: string) => void;
  fullWidth: boolean;
  colorVariant: 'black' | 'gray';
};

const SelectButtonGroup = ({
  options,
  selectedOption,
  onOptionSelect,
  fullWidth,
  colorVariant,
}: SelectButtonGroupProps) => {
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

export default SelectButtonGroup;
