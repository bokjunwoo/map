import {
  FormControl,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent } from 'react';

type UserLevelSearchInputUIProps = {
  error: boolean;
  handleLevelValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  inputValue: number;
};

const UserLevelSearchInputUI = ({
  error,
  handleLevelValueChange,
  handleBlur,
  handleKeyDown,
  inputValue,
}: UserLevelSearchInputUIProps) => {
  return (
    <FormControl hiddenLabel>
      <label htmlFor="user_level" />
      <TextField
        id="user_level"
        aria-label="유저레벨 입력"
        name="유저레벨 입력"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Typography sx={{ fontWeight: 900, fontSize: 20 }}>
                Lv.
              </Typography>
            </InputAdornment>
          ),
        }}
        value={inputValue === 0 ? '' : inputValue}
        onChange={handleLevelValueChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        error={error}
        helperText="200에서 300 사이의 레벨을 입력해주세요."
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#333333',
              borderRadius: 1,
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
      />
    </FormControl>
  );
};

export default UserLevelSearchInputUI;
