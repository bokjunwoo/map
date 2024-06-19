import { FormControl, MenuItem, SelectChangeEvent } from '@mui/material';
import SelectStyle from './style/SelectStyle';

type PortalSelectUIProps = {
  selectedValue: number;
  handleChange: (event: SelectChangeEvent<unknown>) => void;
  menuItem: SelectValue[];
};

const PortalSelectUI = ({
  selectedValue,
  handleChange,
  menuItem,
}: PortalSelectUIProps) => {
  return (
    <FormControl fullWidth>
      <SelectStyle
        value={selectedValue.toString()}
        onChange={handleChange}
        inputProps={{
          'aria-label': 'select_box',
          sx: {
            fontSize: 13,
            ml: 1,
            p: 0,
          },
        }}
      >
        {menuItem.map((item) => {
          return (
            <MenuItem key={item.value} value={item.value} sx={{ fontSize: 13 }}>
              {item.label}
            </MenuItem>
          );
        })}
      </SelectStyle>
    </FormControl>
  );
};

export default PortalSelectUI;
