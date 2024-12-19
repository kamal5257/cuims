import { Box, Grid, InputBase, InputAdornment} from '@mui/material';
import React from 'react';
import LiveSection from '../../ui/LiveSection/LiveSection';
import SearchIcon from '@mui/icons-material/Search';
import TableHeader from '../../ui/TableaHeader/TableHeader';
import EmailIcon from '@mui/icons-material/Email';
import HelpIcon from '@mui/icons-material/Help';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import MessageIcon from '@mui/icons-material/Message';
import ReplyIcon from '@mui/icons-material/Reply';
import TableChartIcon from '@mui/icons-material/TableChart';
import CampaignIcon from '@mui/icons-material/Campaign';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const leaves = 2;

const DashBoard = () => {
    return (
        <Box 
            sx={{ 
                margin: '16px', 
                width: '100%',      // Full width on all devices
                maxWidth: '100%',   // Prevent overflow
                boxSizing: 'border-box',  // Consider padding and margin within width
            }}
        >
            {/* LiveSection at the top */}
            <LiveSection />

            {/* Grid for responsive layout */}
            <Grid container spacing={2} sx={{ mt: '20px', width: '100%' }}>
                {/* Grid item with responsive sizing */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <TableHeader
                        isViewMore={false}
                        Icon={EmailIcon}
                        text="Important Message"
                        width="100%"                        
                        headerColor="royalblue"
                        textColor={"white"}
                        iconColor={"white"}
                    >
                        <div>1. Total leaves pending: {leaves} for approval, <a href='#'>click</a> to approve.</div>
                        <div style={{ paddingTop: '10px', color: '#999599' }}>
                            Administrator (Dec 18 2024 2:39PM)
                        </div>
                        <hr />
                        <Box sx={{ paddingTop: '82px', fontSize: 'small', display: 'flex', alignItems: 'center' }}>
                            <MessageIcon sx={{ marginLeft: '0px', marginRight: '8px' }} />
                            All Message (12)
                            <NotificationImportantIcon sx={{ marginRight: '8px', marginLeft: '20px' }} />                                                       
                            IMPORTANT NOTIFICATION (2)
                        </Box>                        
                    </TableHeader>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Box
                        display="flex"
                        flexDirection={"column"}
                        justifyContent="space-between"
                        alignItems="center"
                        height="auto"
                        
                    >
                        <Box
                            width={"100%"}>
                        <TableHeader
                            isViewMore={false}
                            Icon={HelpIcon}
                            text="My Question or Queries"
                            width="100%"
                            headerColor="#FF598B"
                            textColor={"white"}
                            iconColor={"white"}
                        >
                            <div>
                                <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc' }}>
                                    <thead>
                                        <tr>
                                            <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', background: 'lightgrey' }}>Total</th>
                                            <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', background: 'lightgrey' }}>Closed</th>
                                            <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', background: 'lightgrey' }}>Open</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>0</td>
                                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>0</td>
                                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TableHeader>
                        </Box>
                        
                        <Box width={"100%"} paddingTop={"10px"}>
                        <TableHeader
                            isViewMore={false}
                            Icon={ReplyIcon}
                            text="Feedback To Answer"
                            width="100%"
                            headerColor="#4B42A4"
                            textColor={"white"}
                            iconColor={"white"}                        
                        >
                            <div>
                            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid gray' }}>                                    
                                    <tbody>
                                        <tr>
                                            <td style={{ border: '1px solid #ccc', padding: '8px', background:'lightgray' }}>Staff</td>
                                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>0</td>
                                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>0</td>
                                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>0</td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: '1px solid #ccc', padding: '8px', background:'lightgray' }}>Student</td>
                                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>0</td>
                                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>0</td>
                                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TableHeader>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <TableHeader
                        isViewMore={true}
                        Icon={TableChartIcon}
                        text="Attendance Log"
                        width="100%"
                        headerColor="#A50CB3"
                        textColor={"white"}
                        iconColor={"white"}
                    >
                        <div>
                            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc' }}>
                                <thead>
                                    <tr>
                                        <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', background: 'lightgrey' }}>Date</th>
                                        <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', background: 'lightgrey' }}>Day</th>
                                        <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', background: 'lightgrey' }}>In Time</th>
                                        <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', background: 'lightgrey' }}>Out Time</th>
                                        <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', background: 'lightgrey' }}>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>18 Dec 24</td>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>Wed</td>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>09:13:32</td>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>12:13:32</td>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>-</td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>18 Dec 24</td>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>Wed</td>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>09:13:32</td>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>12:13:32</td>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>-</td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>18 Dec 24</td>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>Wed</td>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>09:13:32</td>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>12:13:32</td>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>-</td>
                                    </tr>                                    
                                    <tr>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>18 Dec 24</td>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>Wed</td>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>09:13:32</td>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>12:13:32</td>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>-</td>
                                    </tr>                                    
                                    <tr>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>18 Dec 24</td>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>Wed</td>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>09:13:32</td>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>12:13:32</td>
                                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>-</td>
                                    </tr>                                    
                                    
                                </tbody>
                            </table>
                        </div>
                    </TableHeader>
                </Grid>

                <Grid item xs={12} sm={6} md={7} lg={7}>
                    <TableHeader
                        isViewMore={false}
                        Icon={CampaignIcon}
                        text="Announcement (ALL)"
                        width="100%"
                        headerColor="#5D595E"
                        textColor={"white"}
                        iconColor={"white"}
                    >
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', boxShadow: '10px gray' }}>
      
                    <InputBase
                        placeholder="Search Announcement"
                            sx={{
                                color: 'inherit',
                                border: 'solid 1px #ccc',
                                width: '100%',  // Ensure it fills the available space
                                borderRadius: '50px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                }}
                                endAdornment={  // Add the dropdown icon at the end of the input field
                                    <InputAdornment position="end">
                                      <SearchIcon sx={{ color: 'gray', }} />
                                    </InputAdornment>
                                  }
                    />                        
                        <InputBase
                            placeholder="ALL"
                            sx={{
                            border: 'solid 1px #ccc',
                            width: '100%',
                            borderRadius: '50px',
                            paddingLeft: '10px',
                            paddingRight: '10px',
                            }}
                            endAdornment={  // Add the dropdown icon at the end of the input field
                                <InputAdornment position="end">
                                  <ArrowDropDownIcon sx={{ color: 'gray', cursor: 'pointer' }} />
                                </InputAdornment>
                              }
                        />
                </Box>
                <Box 
                margin='20px 0'
                fontWeight='bold'>
                    NEW ARRIVALS 2024( 9TH DEC TO 15 DEC, 2024)
                </Box>
                </TableHeader>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TableHeader
                        isViewMore={false}
                        Icon={EventAvailableIcon}
                        text="Upcoming Events"
                        width="100%"                        
                        headerColor="#f72f86"
                        textColor={"white"}
                        iconColor={"white"}
                    >
                        <div>
                            No event found please contact your concerned event
                            Coordinator to display your event information.
                        </div>                                               
                    </TableHeader>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DashBoard;
