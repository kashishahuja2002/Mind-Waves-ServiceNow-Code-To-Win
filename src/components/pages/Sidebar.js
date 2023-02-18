import React, { useState } from "react";

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';  // Dashboard Icon
import PsychologyIcon from '@mui/icons-material/Psychology';    // EAP Icon
import ScheduleIcon from '@mui/icons-material/Schedule';    // Reminders/Breaks Icon
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';  // Daily activities Icon
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';    // Educational resources Icon

import logo from '../../assets/images/logo.png';
import SidebarCurve from '../../assets/images/SidebarCurve.svg';
import '../../styles/pages/sidebar.scss';

const getIcon = (index) => {
    switch(index) {
        case 0:
            return <DashboardIcon />;

        case 1:
            return <PsychologyIcon />;

        case 2:
            return <ScheduleIcon />;

        case 3:
            return <VolunteerActivismIcon />;

        case 4:
            return <LocalLibraryIcon />;

        default:
            return <></> 
    }
}

export const SidebarContents = () => {
    return (
        <Box className="sidebarContents">
            <List>
                <ListItem disablePadding>
                    <img src={logo} alt="Logo" width={100} className="center"></img>
                </ListItem>
                
                {['Dashboard', 'EAP', 'Reminders/Breaks', 'Daily activities', 'Educational resources'].map((text, index) => (
                    <ListItem key={text} disablePadding className={index===1 ? 'active' : ''}>
                        <ListItemButton>
                            <ListItemIcon>
                                {getIcon(index)}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                            
                            {index===1 &&
                                <>
                                    <span className="dot"></span>
                                    <img src={SidebarCurve} className="sidebarCurve" width="15px" />
                                </>
                            }

                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export const Sidebar = () => {

    const [showSidebar, setShowSidebar] = useState(true);

    const toggleDrawer = (value) => {
        setShowSidebar(value);
    }

    return (
        <Drawer
            anchor={"left"}
            open={showSidebar}
            onClose={() => toggleDrawer(false)}
            className="sidebar"
        >
           {SidebarContents()}
        </Drawer>
    );
}