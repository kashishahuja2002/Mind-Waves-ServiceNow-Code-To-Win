import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from "@mui/material/Divider";
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';  // Dashboard Icon
import PsychologyIcon from '@mui/icons-material/Psychology';    // EAP Icon
import ScheduleIcon from '@mui/icons-material/Schedule';    // Reminders/Breaks Icon
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';  // Daily activities Icon
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';    // Educational resources Icon

import SidebarCurve from '../../assets/images/SidebarCurve.svg';
import '../../styles/pages/sidebar.scss';

export const SidebarContents = () => {
    const activeLink = useLocation().pathname;
    const navigate = useNavigate();

    const sidebarList = [
        {name: "Dashboard", link: "/pages/dashboard", icon: <DashboardIcon />},
        {name: "EAP", link: "/pages/eap", icon: <PsychologyIcon />},
        {name: "Reminders/Breaks", link: "/pages/reminders-breaks", icon: <ScheduleIcon />},
        {name: "Daily activities", link: "/pages/daily-activities", icon: <VolunteerActivismIcon />},
        {name: "Educational resources", link: "/pages/educational-resources", icon: <LocalLibraryIcon />},
    ];

    return (
        <Box className="sidebarContents" sx={{ padding: "10px 0" }}>
            <List>
                <ListItem disablePadding>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
                        Mind Waves
                    </Typography>
                </ListItem>
                
                <Divider className="driver" sx={{ margin: "13px 0" }} />

                {sidebarList.map((obj, index) => (
                    <ListItem key={index} disablePadding className={obj.link===activeLink ? 'active' : ''}>
                        <ListItemButton onClick={() => navigate(obj.link)}>
                            <ListItemIcon>
                                {obj.icon}
                            </ListItemIcon>
                            <ListItemText primary={obj.name} />
                            
                            {obj.link===activeLink &&
                                <>
                                    <span className="dot"></span>
                                    <img src={SidebarCurve} alt="" className="sidebarCurve" width="15px" />
                                </>
                            }

                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export const Sidebar = (props) => {

    const { showSidebar, toggleSidebar } = props;

    return (
        <Drawer
            anchor={"left"}
            open={showSidebar}
            onClose={() => toggleSidebar(false)}
            className="sidebar"
        >
           {SidebarContents()}
        </Drawer>
    );
}