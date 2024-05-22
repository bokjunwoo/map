import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: '#f1f2f5', boxShadow: 0, mb: 3 }}
    >
      <Container>
        <Toolbar sx={{ height: '70px' }} disableGutters>
          <Typography
            variant="h1"
            component="a"
            color="#FF9900"
            fontWeight="bold"
            href="/"
            sx={{
              fontSize: 32,
              textDecoration: 'none',
            }}
          >
            버닝필드
          </Typography>
          <Typography
            color="#333333"
            variant="body2"
            fontWeight="bold"
            sx={{ ml: 0.5, mt: 2 }}
          >
            BETA
          </Typography>

          <Box sx={{ ml: 5 }}>
            <Link to="/news" style={{ textDecoration: 'none' }}>
              <Typography
                color="black"
                fontWeight={500}
                variant="h2"
                sx={{
                  fontSize: 16,
                  textDecoration: 'none',
                }}
              >
                새소식
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
