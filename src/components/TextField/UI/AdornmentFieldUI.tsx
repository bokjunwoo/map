import { TextField, InputAdornment, Typography } from '@mui/material';
import { ChangeEvent } from 'react';

type AdornmentFieldUIProps = {
  value: number | string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  adornment: number | string;
};

const AdornmentFieldUI = ({
  value,
  onChange,
  adornment,
}: AdornmentFieldUIProps) => {
  return (
    <TextField
      size="small"
      value={value === 0 ? '' : value}
      onChange={onChange}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#ddd',
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
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Typography variant="body2">{adornment}</Typography>
          </InputAdornment>
        ),
      }}
      inputProps={{
        sx: {
          textAlign: 'end',
          p: 0,
          fontSize: 14,
          width: 45,
          height: 30,
        },
      }}
    />
  );
};

export default AdornmentFieldUI;
