import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, InputBase, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import BookIcon from '@mui/icons-material/Book';
import NavMenu from '../Navitem/NavItem';

const Header = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const drawerWidth = 250;

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* AppBar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: 'primary.main' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Left Side: Menu Icon and Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div">
              My App
            </Typography>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              padding: '0 8px',
              borderRadius: '4px',
              flexGrow: 1,
              maxWidth: '400px',
              mx: 2,
            }}
          >
            <SearchIcon sx={{ mr: 1 }} />
            <InputBase placeholder="Search…" sx={{ color: 'inherit', width: '500px' }} />
          </Box>
          </Box>


          {/* Right Side: Icons and Avatar */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }}>
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }}>
              <BookIcon />
            </IconButton>
            <Avatar alt="User Name" src="/static/images/avatar/1.jpg" sx={{ ml: 2 }} />
            <Typography variant="body1" sx={{ ml: 1, display: { xs: 'none', sm: 'block' } }}>
              John Doe
            </Typography>
            <IconButton color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }}>
              <HomeIcon />
            </IconButton>
            <IconButton color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }}>
              <SettingsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            top: '64px', // Matches AppBar height
          },
        }}
      >
        <Box role="presentation">
          <NavMenu />
        </Box>
      </Drawer>

      {/* Main Content (Hide when drawer is open and on mobile screens) */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: drawerOpen ? `${drawerWidth}px` : 0,
          mt: '64px',
          transition: 'margin-left 0.3s ease',
          display: { xs: drawerOpen ? 'none' : 'block', sm: 'block' }, // Hide on mobile when drawer is open
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Header;
