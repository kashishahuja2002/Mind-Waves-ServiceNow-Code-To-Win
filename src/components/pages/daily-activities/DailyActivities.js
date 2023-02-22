import React from 'react'
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import WaterTracker from './WaterTracker';
export default function DailyActivities() {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };

    return (

        <Box>
            <Box>
                <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth" sx={{
                    '& .MuiTabs-indicator': { backgroundColor: '#242f53' },
                    '& .MuiTab-root': { color: '#242f53' },
                    '& .Mui-selected': { color: '#242f53' },
                }}>
                    <Tab label="Water Tracker" />
                    <Tab label="Excersize" />
                    <Tab label="Meditation" />
                </Tabs>
            </Box>
            <Box sx={{ padding: 2 }}>
                {tabIndex === 0 && (
                    <Box>
                        {<WaterTracker />}
                    </Box>
                )}
                {tabIndex === 1 && (
                    <Box>
                        <Typography>The second tab</Typography>
                    </Box>
                )}
                {tabIndex === 2 && (
                    <Box>
                        <Typography>The third tab</Typography>
                    </Box>
                )}
            </Box>
        </Box >
    );
}
