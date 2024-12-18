import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, IconButton, Collapse } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const navItems = [
  {
    name: "Core Index"
  },
  {
    name: "Calendar"
  },
  {
    name: "Product Flow"
  },
  {
    name: "Analytics"
  },
  {
    name: "Reminders"
  },
  {
    name: "Channels",
    subMenu: [
      { name: "Channel 1" },
      { name: "Channel 2" },
      { name: "Channel 3" },
      { name: "Add Channel" }
    ]
  },
  {
    name: "New Chat",
    subMenu: [
      { name: "Chat 1" },
      { name: "Chat 2" },
      { name: "Chat 3" }
    ]
  }
];

const NavMenu = () => {
  const [open, setOpen] = useState(null);

  const handleClick = (itemName) => {
    setOpen(open === itemName ? null : itemName);
  };

  return (
    <Box>
      <List>
        {navItems.map((item, index) => (
          <div key={index}>
            {/* Render ListItem for each NavItem */}
            <ListItem button onClick={() => item.subMenu ? handleClick(item.name) : null}>
              <ListItemText primary={item.name} />
              {item.subMenu && (
                <IconButton size="small">
                  <ArrowDropDownIcon />
                </IconButton>
              )}
            </ListItem>

            {/* Render Collapse for submenu */}
            {item.subMenu && (
              <Collapse in={open === item.name} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subMenu.map((subItem, subIndex) => (
                    <ListItem key={subIndex} button>
                      <ListItemText primary={subItem.name} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </Box>
  );
};

export default NavMenu;
