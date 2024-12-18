import { Box, Grid } from '@mui/material'
import React from 'react'
import LiveSection from '../../ui/LiveSection/LiveSection'
import TableHeader from '../../ui/TableaHeader/TableHeader'
import { AccessAlarm } from '@mui/icons-material'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const DashBoard = () => {
    return (
        <Box sx={{ margin: '16px' }}>
            <LiveSection />

            {/* Grid for responsive layout */}
            <Grid container spacing={2} sx={{mt: "5px"}}>
                <Grid item xs={12} sm={4} md={4}>
                    <TableHeader
                        isViewMore={false}
                        Icon={AccessAlarm}
                        text="Table Header 1"
                        width="100%"
                        headerColor="lightblue"
                    >
                        <div>Additional content below the header goes here</div>
                        {/* <LiveSection /> */}
                    </TableHeader>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <TableHeader
                        isViewMore={true}
                        Icon={AddCircleIcon}
                        text="Table Header 2"
                        width="100%"
                        headerColor="lightblue"
                    >
                        <div>Additional content below the header goes here</div>
                    </TableHeader>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <TableHeader
                        isViewMore={false}
                        Icon={AccessAlarm}
                        text="Table Header 3"
                        width="100%"
                        headerColor="red"
                    >
                        <div>Additional content below the header goes here</div>
                        {/* <LiveSection /> */}
                    </TableHeader>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <TableHeader
                        isViewMore={true}
                        Icon={AccessAlarm}
                        text="Table Header 3"
                        width="120%"
                        headerColor="gray"
                    >
                        <div>Additional content below the header goes here</div>
                        {/* <LiveSection /> */}
                    </TableHeader>
                </Grid>
            </Grid>
        </Box>
    )
}

export default DashBoard
