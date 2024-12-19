import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Drawer, InputAdornment, InputBase, Avatar, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import BookIcon from '@mui/icons-material/Book';
import cuimsLogo from '../../logo/cuimslogo.png';
import NavMenu from '../Navitem/NavItem';

const Header = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const drawerWidth = 250;

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleProfileMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* AppBar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#fff' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'black' }}>
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
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={cuimsLogo}
                alt="CUIMS Logo"
                style={{
                  height: '50px',
                  objectFit: 'contain',
                  paddingRight: '20px',
                }}
              />
            </Box>

            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                padding: '0 8px',
                borderRadius: '4px',
                flexGrow: 1,
                maxWidth: '800px',
                mx: 2,
              }}
            >
              <InputBase
                placeholder="Search & Bookmark your page"
                sx={{
                  color: '#111',
                  border: 'solid 1px #ccc',
                  width: '100vh',
                  borderRadius: '50px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <SearchIcon sx={{ color: 'gray' }} />
                  </InputAdornment>
                }
              />
            </Box>
          </Box>

          {/* Right Side: Profile Icon */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Profile Menu on small screens */}
            <IconButton
              color="gray"
              onClick={handleProfileMenuClick}
              sx={{ display: { xs: 'block', sm: 'none' } }}
            >
              <Avatar alt="K" src="/static/images/avatar/1.jpg" />
            </IconButton>

            {/* Right Side Menu for larger screens */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <IconButton color="gray">
                <NotificationsIcon />
              </IconButton>
              <IconButton color="gray">
                <BookIcon />
              </IconButton>
              <Avatar alt="K" src="/static/images/avatar/1.jpg" sx={{ ml: 2 }} />
              <p style={{marginLeft:'10px', lineHeight:'0.5'}}>
                  Kamal
              </p>
              <IconButton color="gray">
                <HomeIcon />
              </IconButton>
              <IconButton color="gray">
                <SettingsIcon />
              </IconButton>
            </Box>

            {/* Menu for small screens (opened from the Avatar icon) */}
            <Menu
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleMenuClose}
              sx={{ display: { xs: 'block', sm: 'none' } }}
            >
              <MenuItem onClick={handleMenuClose}>
                <NotificationsIcon sx={{ mr: 1 }} />
                Notifications
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <BookIcon sx={{ mr: 1 }} />
                Bookmarks
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <HomeIcon sx={{ mr: 1 }} />
                Home
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <SettingsIcon sx={{ mr: 1 }} />
                Settings
              </MenuItem>
            </Menu>
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

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: drawerOpen ? `${drawerWidth}px` : 0,
          mt: '64px',
          transition: 'margin-left 0.3s ease',
          display: { xs: drawerOpen ? 'none' : 'block', sm: 'block' },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Header;
