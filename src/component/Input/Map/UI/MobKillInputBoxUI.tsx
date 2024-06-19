import { Box, Typography, InputAdornment } from '@mui/material';
import { ChangeEvent } from 'react';
import InputAdormentStyle from '../../../common/Input/style/InputAdormentStyle';

type MobKillInputBoxUIProps = {
  description: string;
  adornment: number;
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const MobKillInputBoxUI = ({
  description,
  adornment,
  value,
  onChange,
}: MobKillInputBoxUIProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: 1,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          pl: 1,
          height: 30,
          pr: 5,
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
        {description}
      </Typography>

      <InputAdormentStyle
        size="small"
        value={value === 0 ? '' : value}
        onChange={onChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Typography variant="body2">/ {adornment}</Typography>
            </InputAdornment>
          ),
        }}
        inputProps={{
          sx: {
            textAlign: 'end',
            p: 0,
            fontSize: 14,
            width: 50,
            height: 30,
          },
          'aria-label': description,
        }}
      />
    </Box>
  );
};

export default MobKillInputBoxUI;
