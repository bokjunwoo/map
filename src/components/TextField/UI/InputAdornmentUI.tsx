import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import { ChangeEvent } from 'react';

type InputAdornmentUIProps = {
  text: string;
  adornment: number;

  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: number;
};

const InputAdornmentUI = ({
  text,
  adornment,
  value,
  onChange,
}: InputAdornmentUIProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="body2"
        component="span"
        sx={{
          pl: 1,
          pr: 2,
          height: 30,
          display: 'flex',
          alignItems: 'center',
          fontSize: 13,
          borderTop: '1px solid #ddd',
          borderLeft: '1px solid #ddd',
          borderBottom: '1px solid #ddd',
          borderTopLeftRadius: 2,
          borderBottomLeftRadius: 2,
          bgcolor: '#f5f5f5',
        }}
      >
        {text}
      </Typography>

      <TextField
        size="small"
        value={value === 0 ? '' : value}
        onChange={onChange}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderTopRightRadius: 2,
              borderBottomRightRadius: 2,
              borderColor: '#ddd',
            },
            '&:hover fieldset': {
              borderColor: '#ddd',
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
              <Typography variant="body2">/ {adornment}</Typography>
            </InputAdornment>
          ),
        }}
        inputProps={{
          sx: { textAlign: 'end', p: 0, fontSize: 14, width: 50, height: 30 },
        }}
      />
    </Box>
  );
};

export default InputAdornmentUI;
