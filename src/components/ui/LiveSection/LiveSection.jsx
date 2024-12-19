import { Box, Typography } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const LiveSection = () => { 
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-evenly" // Ensure space is evenly distributed between icons
      border="1px solid #ccc"
      padding="10px"
      sx={{
        flexDirection: { xs: 'row', sm: 'row' }, // Align all items horizontally
        gap: 2, // Space between icons
        width: { xs: '91%', sm: '94%' }, // 90% width on mobile and 94% on larger screens
        margin: '0', // Center the box
      }}
    >
      {/* Important Link */}
      <Box 
        display="flex" 
        alignItems="center"         
        sx={{ 
          width: { xs: 'auto', sm: 'auto' }, // Width is auto to fit content
          justifyContent: 'center',
        }}
      >
        <LinkIcon fontSize="small" sx={{ mr: 1 }} />
        <Typography 
          variant="body1" 
          sx={{ display: { xs: 'none', sm: 'inline' } }}  // Hide label on mobile
        >
          Important Link
        </Typography>
      </Box>

      {/* Feedback */}
      <Box 
        display="flex" 
        alignItems="center" 
        sx={{ 
          width: { xs: 'auto', sm: 'auto' }, 
          justifyContent: 'center',
        }}
      >
        <FeedbackIcon fontSize="small" sx={{ mr: 1 }} />
        <Typography 
          variant="body1" 
          sx={{ display: { xs: 'none', sm: 'inline' } }}  // Hide label on mobile
        >
          Feedback
        </Typography>
      </Box>

      {/* CU Live */}
      <Box 
        display="flex" 
        alignItems="center" 
        sx={{ 
          width: { xs: 'auto', sm: 'auto' },
          justifyContent: 'center',
        }}
      >
        <LiveTvIcon fontSize="small" sx={{ mr: 1 }} />
        <Typography 
          variant="body1" 
          sx={{ display: { xs: 'none', sm: 'inline' } }}  // Hide label on mobile
        >
          CU Live
        </Typography>
      </Box>

      {/* Section */}
      <Box 
        display="flex" 
        alignItems="center" 
        sx={{ 
          width: { xs: 'auto', sm: 'auto' },
          justifyContent: 'center', 
        }}
      >
        <SearchIcon fontSize="small" sx={{ mr: 1 }} />
        <Typography 
          variant="body1" 
          sx={{ display: { xs: 'none', sm: 'inline' } }}  // Hide label on mobile
        >
          Section
        </Typography>
      </Box>
    </Box>
  );
}

export default LiveSection;
