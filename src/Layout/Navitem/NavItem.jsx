import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, IconButton, Collapse } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const navItems = [
  {
    name: "Academics",
    subMenu: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" }
    ]
  },
  {
    name: "Accounts",
    subMenu: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" }
    ]
  },
  {
    name: "Administration",
    subMenu: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" }
    ]
  },
  {
    name: "Admission",
    subMenu: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" }
    ]
  },
  {
    name: "Admission Referral Form"
  },
  {
    name: "Announcements",
    subMenu: [
      { name: "Channel 1" },
      { name: "Channel 2" },
      { name: "Channel 3" },
      { name: "Add Channel" }
    ]
  },
  {
    name : "Buddy Evalution"
  },
  {
    name : "Check Pearson Test"
  },
  {
    name : "Club Activities"
  },
  {
    name: "CO Dashboard",
    subMenu: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" }
    ]
  },
  {
    name : "Creche Facility",
    subMenu: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" }
    ]
  },
  {
    name : "CRM",
    subMenu: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" }
    ]
  },
  {
    name : "CU IDOL",
    subMenu: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" }
    ]
  },
  {
    name : "CU OL",
    subMenu: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" },
      { name: "Submenu 4" },
      { name: "Submenu 5" },
      { name: "Submenu 6" },
      { name: "Submenu 7" },
    ]
  },
  {
    name : "Dashboard Test"
  },
  {
    name : "DCPD",
    subMenu: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" },
      { name: "Submenu 4" },
      { name: "Submenu 5" }
    ]
  },
  {
    name : "DOP Approval",
    subMenu: [
      { name: "Submenu 1" },
      { name: "Submenu 2" },
      { name: "Submenu 3" },
      { name: "Submenu 4" }
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
