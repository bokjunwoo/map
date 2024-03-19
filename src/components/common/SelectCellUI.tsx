import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { SelectOptions } from '../../interface/select';

type SelectCellUIProps = {
  options: SelectOptions;
  value: number;
  onChange: (event: SelectChangeEvent<number>) => void;
};

const SelectCellUI = ({ options, value, onChange }: SelectCellUIProps) => (
  <Select value={value} onChange={onChange} size="small" variant="standard">
    <InputLabel id={`${options.label}_select_label`}>
      {options.label}
    </InputLabel>
    {options.values.map((option, index) => (
      <MenuItem key={index} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </Select>
);

export default SelectCellUI;
