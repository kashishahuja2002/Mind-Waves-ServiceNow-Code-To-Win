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

import SidebarCurve from '../../assets/images/SidebarCurve.svg';
import { sidebarList } from "../Constants"; 

export const SidebarContents = (props) => {

    const activeLink = useLocation().pathname;
    const navigate = useNavigate();

    const handleSidebarItemClick = (link) => {
        navigate(link);
        props.toggleSidebar(false);
    }

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
                        <ListItemButton onClick={() => handleSidebarItemClick(obj.link)}>
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
           <SidebarContents toggleSidebar={toggleSidebar} />
        </Drawer>
    );
}