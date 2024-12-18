import React from 'react';
import { IconButton, Button, Box } from '@mui/material';

const TableHeader = ({ isViewMore, children, Icon, text, width, headerColor, textColor, iconColor }) => {
  return (
    <Box width={width} border="1px solid #ccc" borderRadius="4px" boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)">
      {/* Header Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height="30px"
        padding="0 10px"
        borderBottom="1px solid #ccc"
        bgcolor={headerColor} // Set header background color from props
        color={textColor}
      >
        <Box display="flex" alignItems="center">
          {/* Left Side: Icon and Text from Props */}
          <IconButton sx={{ color: iconColor }}> {/* Set Icon color from prop */}
            <Icon />
          </IconButton>
          <span>{text}</span>
        </Box>
        {/* Right Side: View More Button */}
        {isViewMore && (
          <Button variant="text" size="small">
            View More
          </Button>
        )}
      </Box>

      {/* Children Content Below the Header */}
      <Box padding="10px">
        {children}
      </Box>
    </Box>
  );
};

export default TableHeader;
