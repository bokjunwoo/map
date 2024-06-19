import SearchIcon from '@mui/icons-material/Search';
import { Box, InputBase, IconButton } from '@mui/material';
import { ChangeEvent } from 'react';

type CharacterNameInputUIProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => Promise<void>;
  onKeyDown: (e: React.KeyboardEvent) => void;
};

const CharacterNameInputUI = ({
  value,
  onChange,
  onClick,
  onKeyDown,
}: CharacterNameInputUIProps) => {
  return (
    <Box
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 300,
        height: 44,
        border: '1px solid #FF9900',
        borderRadius: 1,
        '&:hover': {
          boxShadow: `0 0 0 3px rgba(255, 153, 0, 0.4)`,
        },
        bgcolor: 'rgba(0, 0, 0, 0.7)',
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          fontSize: 14,
          p: 0,
          color: '#FFFFFF',
        }}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="캐릭터 닉네임을 입력하세요."
        inputProps={{ 'aria-label': 'search_character' }}
      />
      <IconButton
        sx={{ p: '10px', color: '#FFFFFF' }}
        aria-label="search"
        onClick={onClick}
      >
        <SearchIcon sx={{ color: '#FFFFFF' }} />
      </IconButton>
    </Box>
  );
};

export default CharacterNameInputUI;
