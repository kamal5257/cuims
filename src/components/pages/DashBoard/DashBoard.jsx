import { Box, Grid } from '@mui/material';
import React from 'react';
import LiveSection from '../../ui/LiveSection/LiveSection';
import TableHeader from '../../ui/TableaHeader/TableHeader';
import { AccessAlarm, Padding } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import HelpIcon from '@mui/icons-material/Help';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import MessageIcon from '@mui/icons-material/Message';

const leaves = 2;
const DashBoard = () => {
    return (
        <Box 
            sx={{ 
                margin: '16px', 
                width: '100%',  // Ensure the main Box takes up full width
                maxWidth: '100%',  // Prevent any overflow by restricting max width
                boxSizing: 'border-box',  // Ensure padding/margin don't affect width
            }}
        >
            {/* LiveSection at the top */}
            <LiveSection />

            {/* Grid for responsive layout */}
            <Grid container spacing={2} sx={{ mt: '20px', width: '100%' }}>
                {/* Grid item with responsive sizing */}
                <Grid item xs={12} sm={4} md={4} lg={3}>
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
                        <hr/>
                        <Box sx={{ paddingTop: '100px', fontSize: 'small', display: 'flex', alignItems: 'center' }}>
                            <MessageIcon sx={{ marginLeft: '0px', marginRight: '8px' }} />
                                All Message (12)
                            <NotificationImportantIcon sx={{ marginRight: '8px', marginLeft: '20px' }} />                                                       
                                IMPORTANT NOTIFICATION (2)
                        </Box>                        
                    </TableHeader>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
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
                                    <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', background: 'lightgrey'}}>Total</th>
                                    <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', background: 'lightgrey'}}>Closed</th>
                                    <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', background: 'lightgrey'}}>Open</th>
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
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <TableHeader
                        isViewMore={false}
                        Icon={AccessAlarm}
                        text="Feedback To Answer"
                        width="100%"
                        headerColor="#4B42A4"
                        textColor={"white"}
                        iconColor={"white"}
                    >
                        <div>Additional content below the header goes here</div>
                    </TableHeader>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <TableHeader
                        isViewMore={true}
                        Icon={AccessAlarm}
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
                                    <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', background: 'lightgrey'}}>Date</th>
                                    <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', background: 'lightgrey'}}>Day</th>
                                    <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', background: 'lightgrey'}}>In Time</th>
                                    <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', background: 'lightgrey'}}>Out Time</th>
                                    <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', background: 'lightgrey'}}></th>
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
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <TableHeader
                        isViewMore={false}
                        Icon={AccessAlarm}
                        text="Announcement (ALL)"
                        width="100%"
                        headerColor="#5D595E"
                        textColor={"white"}
                        iconColor={"white"}
                    >
                        <div>Additional content below the header goes here</div>
                    </TableHeader>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DashBoard;
