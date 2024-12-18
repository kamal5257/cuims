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
      justifyContent="space-evenly"
      border="1px solid #ccc"
          padding="10px"
    >
      <Box display="flex" alignItems="center" sx={{ borderRight: '1px solid #ccc', paddingRight: 2 }}>
        <LinkIcon fontSize="small" sx={{ mr: 1 }} />
        <Typography variant="body1">Important Link</Typography>
      </Box>
      <Box display="flex" alignItems="center" sx={{ borderRight: '1px solid #ccc', paddingRight: 2 }}>
        <FeedbackIcon fontSize="small" sx={{ mr: 1 }} />
        <Typography variant="body1">Feedback</Typography>
      </Box>
      <Box display="flex" alignItems="center" sx={{ borderRight: '1px solid #ccc', paddingRight: 2 }}>
        <LiveTvIcon fontSize="small" sx={{ mr: 1 }} />
        <Typography variant="body1">CU Live</Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <SearchIcon fontSize="small" sx={{ mr: 1 }} />
        <Typography variant="body1">Section</Typography>
      </Box>
    </Box>
  );
}

export default LiveSection;
