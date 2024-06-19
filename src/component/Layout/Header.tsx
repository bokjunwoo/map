import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      sx={{ backgroundColor: '#F1F2F3', mb: 3 }}
      position="static"
      elevation={0}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxHeight: 40,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <img src={'/images/burning.png'} alt="logo" />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  ml: 1,
                  mr: 1,
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  color: '#333333',
                  textDecoration: 'none',
                }}
              >
                버닝필드
              </Typography>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <MenuItem
                sx={{ py: '6px', px: '12px' }}
                onClick={() => navigate('/input')}
              >
                <Typography variant="body2" color="text.primary">
                  직접입력
                </Typography>
              </MenuItem>
              <MenuItem
                sx={{ py: '6px', px: '12px' }}
                onClick={() => navigate('/news')}
              >
                <Typography variant="body2" color="text.primary">
                  FAQ / 소식
                </Typography>
              </MenuItem>
            </Box>
          </Box>

          <Box sx={{ display: { sm: '', md: 'none' } }}>
            <Button
              variant="text"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ minWidth: '30px', p: '4px' }}
            >
              <MenuIcon color="action" />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
