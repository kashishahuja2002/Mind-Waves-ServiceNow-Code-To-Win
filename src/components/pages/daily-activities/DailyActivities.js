import React from 'react'
import '../../../styles/pages/daily-activities/WaterTracker/WaterTracker.scss';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import WaterTracker from './WaterTracker';
import Exercise from './Exercise';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalking, faHeartPulse, faGlassWater, faDumbbell } from '@fortawesome/free-solid-svg-icons'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

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
                    "& button:hover": { backgroundColor: '#dceaf4', color: "#242f53" },
                    '& .Mui-selected': { color: '#242f53', fontWeight: "bold" },
                }}>
                    <Tab label="Water Tracker" className='tab' icon={<FontAwesomeIcon icon={faGlassWater} className="tab-icon" />} />
                    <Tab label="Excersize" className='tab' icon={<FontAwesomeIcon icon={faDumbbell} className="tab-icon" />} />
                    <Tab label="Meditation" className='tab' icon={<SelfImprovementIcon className="tab-icon" />} />
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
                        {<Exercise />}
                    </Box>
                )}
                {tabIndex === 2 && (
                    <Box>
                        <h1>Meditation</h1>
                    </Box>
                )}
            </Box>
        </Box >
    );
}
