import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

type SelectCellUIProps = {
  options: SelectOptions;
  value: number;
  onChange: (event: SelectChangeEvent<number>) => void;
};

const SelectCellUI = ({ options, value, onChange }: SelectCellUIProps) => (
  <FormControl variant="standard" size="small">
    <Select value={value} onChange={onChange} name={options.label}>
      {options.values.map((option, index) => (
        <MenuItem key={index} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default SelectCellUI;
