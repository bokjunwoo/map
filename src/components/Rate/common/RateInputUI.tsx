import {
  ListItemButton,
  Avatar,
  FormControl,
  TextField,
  InputAdornment,
} from '@mui/material';

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
      <Avatar
        variant="rounded"
        sx={{ width: 36, height: 36 }}
        src={require(`../../../assets/rate_icon/${option.key}.png`)}
        alt={option.key}
      />

      <FormControl fullWidth sx={{ ml: 1 }} size="small">
        <TextField
          size="small"
          label={option.label}
          id={option.key}
          value={value}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
          InputLabelProps={{ sx: { fontSize: 13 } }}
          inputProps={{ sx: { height: 36, pt: 0, pb: 0 } }}
        />
      </FormControl>
    </ListItemButton>
  );
};

export default RateInputUI;
