import { AppBar, Container, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: '#f1f2f5', boxShadow: 0, mb: 3 }}
    >
      <Container>
        <Toolbar sx={{ height: '90px' }} disableGutters>
          <Typography
            component="a"
            href="/"
            sx={{
              pt: 2,
              pb: 2,
              fontWeight: 700,
              fontSize: 40,
              color: '#FF9900',
              textDecoration: 'none',
            }}
          >
            버닝필드
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
