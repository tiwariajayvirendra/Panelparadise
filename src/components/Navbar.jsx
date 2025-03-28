import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Container,
  InputBase,
  styled,
  alpha,
  useTheme,
  useMediaQuery,
  ListItemIcon
} from '@mui/material';
import {
  Search as SearchIcon,
  Person as PersonIcon,
  Menu as MenuIcon,
  Logout as LogoutIcon
} from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#ffffff',
  '&:hover': {
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  '& .MuiInputBase-root': {
    color: '#2c3e50',
    '& .MuiInputBase-input': {
      '&::placeholder': {
        color: 'rgba(44, 62, 80, 0.7)',
      },
    },
  },
  '& .MuiSvgIcon-root': {
    color: '#2c3e50',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#2c3e50',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

const Navbar = () => {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { user, logout } = useAuth();

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Categories', path: '/categories' },
    { text: 'Products', path: '/products' },
    { text: 'About', path: '/about' },
  ];

  const authMenuItems = user
    ? [
        { text: 'Profile', path: '/profile' },
        { text: 'Logout', path: '#', onClick: handleLogout, icon: <LogoutIcon /> },
      ]
    : [
        { text: 'Login', path: '/login' },
      ];

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: '#8A9A9E',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        '& .MuiButton-root': {
          color: '#FFFFF',
          '&:hover': {
            backgroundColor: 'rgba(44, 62, 80, 0.1)',
          },
        },
        '& .MuiInputBase-root': {
          color: '#FFFFF',
          '& .MuiInputBase-input': {
            '&::placeholder': {
              color: 'rgba(44, 62, 80, 0.7)',
            },
          },
        },
        '& .MuiIconButton-root': {
          color: '#2c3e50',
        },
        '& .MuiTypography-root': {
          color: '#2c3e50',
        },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: { xs: 0, sm: 1 },
              color: '#2c3e50',
              textDecoration: 'none',
              fontWeight: 700,
              display: 'block',
              '&:hover': {
                color: '#FFFFFF',
              },
            }}
          >
            Panel Paradise
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search products..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMobileMenuOpen}
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={mobileMenuAnchor}
                open={Boolean(mobileMenuAnchor)}
                onClose={handleMenuClose}
                PaperProps={{
                  sx: {
                    backgroundColor: '#9FE2BF',
                    '& .MuiMenuItem-root': {
                      color: '#2c3e50',
                      '&:hover': {
                        backgroundColor: 'rgba(44, 62, 80, 0.1)',
                      },
                    },
                  },
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.text}
                    component={RouterLink}
                    to={item.path}
                    onClick={handleMenuClose}
                  >
                    {item.text}
                  </MenuItem>
                ))}
                {authMenuItems.map((item) => (
                  <MenuItem
                    key={item.text}
                    component={item.onClick ? 'div' : RouterLink}
                    to={item.path}
                    onClick={item.onClick || handleMenuClose}
                  >
                    {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                    {item.text}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  color="inherit"
                >
                  {item.text}
                </Button>
              ))}
              {authMenuItems.map((item) => (
                <Button
                  key={item.text}
                  component={item.onClick ? 'div' : RouterLink}
                  to={item.path}
                  color="inherit"
                  onClick={item.onClick}
                  startIcon={item.icon}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 