import {
  FormControl,
  Avatar,
  ListItemButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { ExpInputOption } from '../../../interface/exp';

type ExpInputUIProps = {
  options: ExpInputOption;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ExpInputUI = ({ options, value, handleChange }: ExpInputUIProps) => {
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
        <TextField
          size="small"
          label={options.label}
          id={options.key}
          value={value === '0' ? '' : value}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
        />
      </FormControl>
    </ListItemButton>
  );
};

export default ExpInputUI;
