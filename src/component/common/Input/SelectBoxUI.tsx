import { FormControl, MenuItem, SelectChangeEvent } from '@mui/material';
import SelectStyle from './style/SelectStyle';

type SelectBoxUIProps = {
  selectedValue: number;
  handleChange: (event: SelectChangeEvent<unknown>) => void;
  menuItem: SelectValue[];
};

const SelectBoxUI = ({
  selectedValue,
  handleChange,
  menuItem,
}: SelectBoxUIProps) => {
  return (
    <FormControl fullWidth>
      <SelectStyle
        value={selectedValue.toString()}
        onChange={handleChange}
        inputProps={{
          'aria-label': 'select_box',
          sx: {
            padding: '0px 0px 0px 16px',
            fontSize: 13,
            fontWeight: 500,
          },
        }}
      >
        {menuItem.map((item) => {
          return (
            <MenuItem key={item.value} value={item.value} sx={{ fontSize: 14 }}>
              {item.label}
            </MenuItem>
          );
        })}
      </SelectStyle>
    </FormControl>
  );
};

export default SelectBoxUI;
