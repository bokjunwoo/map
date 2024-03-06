import PersonIcon from '@mui/icons-material/Person';
import {
  Paper,
  InputBase,
  IconButton,
  FormControl,
  FormHelperText,
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
    <FormControl error={error}>
      <Paper
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 250,
          height: 40,
          boxShadow: 'none',
          border: error ? `1px solid #F44336` : '1px solid rgba(0, 0, 0, 0.3)',
        }}
      >
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <PersonIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="플레이어 레벨"
          inputProps={{ 'aria-label': 'player_level' }}
          onChange={handleLevelValueChange}
          onBlur={handleBlur}
          value={inputValue === 0 ? '' : inputValue}
          error={error}
          onKeyDown={handleKeyDown}
        />
      </Paper>

      <FormHelperText id="error_text" sx={{ mr: 0, ml: 0 }}>
        200에서 300 사이의 숫자를 입력해주세요.
      </FormHelperText>
    </FormControl>
  );
};

export default UserLevelSearchInputUI;
