import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

type SelectedBoosterUIProps = {
  selectedValue: number;
  handleChange: (event: SelectChangeEvent) => void;
  menuItem: {
    value: number;
    label: string;
  }[];
};

const SelectedBoosterUI = ({
  selectedValue,
  handleChange,
  menuItem,
}: SelectedBoosterUIProps) => {
  return (
    <Select
      aria-label="select-booster"
      labelId="select-booster"
      value={`${selectedValue}`}
      onChange={handleChange}
      fullWidth
      sx={{
        width: 80,
        fontWeight: 500,
        '&.MuiOutlinedInput-root': {
          height: '30.59px',
          '& fieldset': {
            border: 'none',
            borderRadius: 0,
          },
          '&:hover fieldset': {
            border: '1px solid',
            borderColor: '#FF9900',
          },
          '&.Mui-focused fieldset': {
            border: '1px solid',
            borderColor: '#FF9900',
            boxShadow: `0 0 0 2px rgba(255, 153, 0, 0.4)`,
          },
        },
      }}
      inputProps={{
        sx: {
          padding: '0px 0px 0px 16px',
          fontSize: 13,
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
    </Select>
  );
};

export default SelectedBoosterUI;
