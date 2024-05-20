import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

type SelectedPrittoGameOptionUIProps = {
  value: number;
  handleChange: (event: SelectChangeEvent) => void;
  menuItem: {
    value: number;
    label: string;
  }[];
};

const SelectedPrittoGameOptionUI = ({
  value,
  handleChange,
  menuItem,
}: SelectedPrittoGameOptionUIProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="select_Pritto_setting" />
      <Select
        aria-label="select_Pritto_setting"
        labelId="select_Pritto_setting"
        value={`${value}`}
        onChange={handleChange}
        sx={{
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
      </Select>
    </FormControl>
  );
};

export default SelectedPrittoGameOptionUI;
