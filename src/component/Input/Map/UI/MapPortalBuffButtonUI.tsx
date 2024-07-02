import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Box, IconButton, Typography } from '@mui/material';

type MapPortalBuffButtonUIProps = {
  count: number;
  disableIncrement: number;
  disableDecrement: number;
  increment: () => void;
  decrement: () => void;
};

const MapPortalBuffButtonUI = ({
  count,
  disableIncrement,
  disableDecrement,
  increment,
  decrement,
}: MapPortalBuffButtonUIProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <IconButton
        aria-label="증가버튼"
        onClick={increment}
        sx={{
          p: 0,
          '&:hover': {
            backgroundColor: 'rgba(255, 153, 0, 0.2)',
          },
        }}
        disabled={count === disableIncrement ? true : false}
      >
        <ArrowDropUpIcon />
      </IconButton>

      <Typography variant="body2" sx={{ fontSize: 13, mr: 0.3, ml: 0.3 }}>
        Lv. {count}
      </Typography>

      <IconButton
        aria-label="감소버튼"
        onClick={decrement}
        sx={{
          p: 0,
          '&:hover': {
            backgroundColor: 'rgba(255, 153, 0, 0.2)',
          },
        }}
        disabled={count === disableDecrement ? true : false}
      >
        <ArrowDropDownIcon />
      </IconButton>
    </Box>
  );
};

export default MapPortalBuffButtonUI;
