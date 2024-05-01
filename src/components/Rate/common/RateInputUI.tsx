import {
  ListItemButton,
  Avatar,
  FormControl,
  TextField,
  InputAdornment,
} from '@mui/material';
import { RateInputOption } from '../../../interface/rate';

type RateInputUIProps = {
  option: RateInputOption;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RateInputUI = ({ option, value, handleChange }: RateInputUIProps) => {
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

      <FormControl fullWidth sx={{ ml: 1 }} size="small">
        <TextField
          size="small"
          label={option.label}
          id={option.key}
          value={value === '0' ? '' : value}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
          InputLabelProps={{ sx: { fontSize: 14 } }}
          inputProps={{ sx: { height: 36, pt: 0, pb: 0 } }}
        />
      </FormControl>
    </ListItemButton>
  );
};

export default RateInputUI;
