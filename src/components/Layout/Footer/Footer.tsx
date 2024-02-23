import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        color: '#424242',
        padding: 3,
        textAlign: 'center',
        bgcolor: '#f1f3f5',
        mt: 3,
      }}
    >
      <Typography variant="body2">
        &copy; 2024 버닝필드. All rights reserved.
      </Typography>
      <Typography variant="body2">
        This site is not associated with NEXON Korea.
      </Typography>
      <Typography variant="body2">문의 / 오류제보 :</Typography>
    </Box>
  );
};

export default Footer;
