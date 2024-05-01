import {
  Avatar,
  FormControl,
  InputLabel,
  ListItemButton,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { RateSelectOption } from '../../../interface/rate';

type RateSelectUIProps = {
  option: RateSelectOption;
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const RateSelectUI = ({ option, value, handleChange }: RateSelectUIProps) => {
  return (
    <ListItemButton
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        p: 1.5,
      }}
    >
      <Avatar variant="rounded" sx={{ width: 36, height: 36 }} />

      <FormControl fullWidth sx={{ ml: 1, height: 36 }} size="small">
        <InputLabel id={option.key} sx={{ fontSize: 14 }}>
          {option.label}
        </InputLabel>
        <Select
          labelId={option.key}
          id={option.key}
          value={value}
          label={option.label}
          onChange={handleChange}
          sx={{ fontSize: 14 }}
        >
          {option.values.map((v) => {
            return (
              <MenuItem value={v.value} key={v.value} sx={{ fontSize: 14 }}>
                {v.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </ListItemButton>
  );
};

export default RateSelectUI;
