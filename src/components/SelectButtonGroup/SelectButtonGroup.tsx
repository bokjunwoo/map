import { ButtonGroup, Button } from '@mui/material';

type SelectButtonGroupProps = {
  options: string[];
  selectedOption: string;
  onOptionSelect: (optionValue: string) => void;
};

const SelectButtonGroup = ({
  options,
  selectedOption,
  onOptionSelect,
}: SelectButtonGroupProps) => {
  return (
    <ButtonGroup variant="outlined" aria-label="button_group">
      {options.map((option, index) => {
        const isSelected = option === selectedOption;
        return (
          <Button
            key={index}
            color="inherit"
            sx={{
              backgroundColor: isSelected ? '#333333' : 'transparent',
              '&:hover': {
                backgroundColor: isSelected ? '#333333' : 'transparent',
              },
              color: isSelected ? '#ffffff' : '#333333',
              border: isSelected ? '1px solid #333333' : '1px solid #333333',
              borderRadius: '4px',
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
