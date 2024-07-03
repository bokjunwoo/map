import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

type RateBoxUIProps = {
  color: string;
  label: string;
  children: ReactNode;
};

const RateBoxUI = ({ color, label, children }: RateBoxUIProps) => {
  return (
    <Box sx={{ width: 100 }}>
      <Box
        sx={{
          bgcolor: color,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontSize: 12, textAlign: 'center' }}
          p={0.5}
        >
          {label}
        </Typography>
      </Box>

      {children}
    </Box>
  );
};

export default RateBoxUI;
