import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Avatar,
  ListItemButton,
} from '@mui/material';
import { ExpSelectOption } from '../../../interface/exp';

type ExpSelectUIProps = {
  options: ExpSelectOption;
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const ExpSelectUI = ({ options, value, handleChange }: ExpSelectUIProps) => {
  return (
    <ListItemButton
      sx={{
        display: 'flex',
        width: '100%',
        pt: 1.5,
        pb: 1.5,
      }}
    >
      <Avatar
        variant="rounded"
        src={require(`../../../assets/exp_icon/${options.key}.png`)}
      />

      <FormControl fullWidth sx={{ ml: 1 }} size="small">
        <InputLabel id={options.key}>{options.label}</InputLabel>
        <Select
          labelId={options.key}
          id={options.key}
          value={value}
          label={options.label}
          onChange={handleChange}
        >
          {options.values.map((v) => {
            return (
              <MenuItem value={v.value} key={v.value}>
                {v.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </ListItemButton>
  );
};

export default ExpSelectUI;
