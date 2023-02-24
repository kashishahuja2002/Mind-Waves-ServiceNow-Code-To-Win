import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = (props) => {
    const { toggleSidebar } = props;
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [headRoute, setHeadRoute] = React.useState(null);

    const pathname = useLocation().pathname;
    useEffect(() => {
        let text = '';
        switch(pathname) {
            case "/pages/dashboard":
                text = "Dashboard";
                break;
            case "/pages/eap":
                text = "EAP";
                break;
            case "/pages/set-reminders":
                text = "Set Reminders";
                break;
            case "/pages/daily-activities":
                text = "Daily Activities";
                break;
            case "/pages/educational-resources":
                text = "Educational Resources";
                break;
            default:
                text = null;
        }
        setHeadRoute(text);
    }, [pathname]);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/auth/login");
    }

    return (
        <Box sx={{ flexGrow: 1 }} className="navbar">
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { lg: 'none' } }}
                        onClick={() => toggleSidebar(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <HomeIcon sx={{ fontSize: "20px" }} />
                    <Typography variant="body" sx={{ flexGrow: 1 }}>
                        {headRoute !== null ? `/ ${headRoute}` : ''}
                    </Typography>
                    
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            sx={{
                                ".MuiPaper-elevation": {
                                    top: "70px !important",
                                    backgroundColor: "var(--dark-blue)",
                                    color: "#ffffff",
                                },

                                ".MuiMenuItem-root:hover": {
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                }
                            }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;