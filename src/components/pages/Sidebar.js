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

import SidebarCurve from '../../assets/images/SidebarCurve.svg';
import { sidebarList } from "../Constants"; 
import LogoWhite from '../../assets/images/LogoWhite.png';

export const SidebarContents = (props) => {

    const { toggleSidebar } = props;

    const activeLink = useLocation().pathname;
    const navigate = useNavigate();

    const handleSidebarItemClick = (link) => {
        navigate(link);
        toggleSidebar(false);
    }

    return (
        <Box className="sidebarContents" sx={{ padding: "10px 0" }}>
            <List>
                <ListItem disablePadding>
                    <img src={LogoWhite} alt="logo" width="100px" style={{ margin: "auto" }} />
                </ListItem>
                
                <Divider className="divider" sx={{ margin: "13px 0" }} />

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