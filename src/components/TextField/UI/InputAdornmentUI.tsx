import { Box, InputAdornment, TextField, Typography } from '@mui/material';

type InputAdornmentUIProps = {
  text: string;
  adornment: string;
};

const InputAdornmentUI = ({ text, adornment }: InputAdornmentUIProps) => {
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Typography
      variant="body2"
      sx={{
        pl: 1,
        width: 200,
        height: 35,
        lineHeight: '35px',
        borderTop: '1px solid #ddd',
        borderLeft: '1px solid #ddd',
        borderBottom: '1px solid #ddd',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        bgcolor: '#f5f5f5',
      }}
    >
      {text}
    </Typography>

    <TextField
      size="small"
      sx={{
        width: 90,
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
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
        sx: { textAlign: 'end', p: 0, fontSize: 14, height: 35 },
      }}
    />
  </Box>;
};

export default InputAdornmentUI;
