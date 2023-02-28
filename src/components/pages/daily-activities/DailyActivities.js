import React, { useState } from 'react'

import { Box, Tab, Tabs } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassWater, faDumbbell } from '@fortawesome/free-solid-svg-icons'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import WaterTracker from './WaterTracker';
import Exercise from './Exercise';
import Meditation from './Meditation';

import '../../../styles/pages/daily-activities/DailyActivities.scss';

export default function DailyActivities() {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };

    return (
        <Box className="dailyActivities">
            <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth">
                <Tab label="Water Tracker" className='tab' icon={<FontAwesomeIcon icon={faGlassWater} className="tab-icon" />} />
                <Tab label="Excercise Tracker" className='tab' icon={<FontAwesomeIcon icon={faDumbbell} className="tab-icon" />} />
                <Tab label="Meditation Tracker" className='tab' icon={<SelfImprovementIcon className="tab-icon" />} />
            </Tabs>

            {tabIndex === 0 && (<WaterTracker />)}
            {tabIndex === 1 && (<Exercise />)}
            {tabIndex === 2 && (<Meditation />)}
        </Box>
    );
}