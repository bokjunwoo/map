import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Box, IconButton, Typography } from '@mui/material';

type UpDownButtonUIProps = {
  initialPlayTime: number;
  count: number;
  increment: () => void;
  decrement: () => void;
};

const UpDownButtonUI = ({
  initialPlayTime,
  count,
  increment,
  decrement,
}: UpDownButtonUIProps) => {
  const positiveThreshold = Math.ceil((initialPlayTime / 10) * 4);
  const negativeThreshold = Math.ceil((initialPlayTime / 10) * 2);

  const disableIncrement = initialPlayTime + positiveThreshold === count;

  const disableDecrement = initialPlayTime - negativeThreshold === count;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '30.59px',
      }}
    >
      <IconButton
        aria-label="증가버튼"
        onClick={increment}
        sx={{
          p: 0,
          cursor: disableIncrement ? 'not-allowed' : 'pointer',
          '&:hover': {
            backgroundColor: 'rgba(255, 153, 0, 0.2)',
          },
        }}
        disabled={disableIncrement}
      >
        <ArrowDropUpIcon />
      </IconButton>

      <Typography variant="body2" sx={{ fontSize: 13, mr: 0.3, ml: 0.3 }}>
        {count} 초
      </Typography>

      <IconButton
        aria-label="감소버튼"
        onClick={decrement}
        sx={{
          p: 0,
          cursor: disableDecrement ? 'not-allowed' : 'pointer',
          '&:hover': {
            backgroundColor: 'rgba(255, 153, 0, 0.2)',
          },
        }}
        disabled={disableDecrement}
      >
        <ArrowDropDownIcon />
      </IconButton>
    </Box>
  );
};

export default UpDownButtonUI;
