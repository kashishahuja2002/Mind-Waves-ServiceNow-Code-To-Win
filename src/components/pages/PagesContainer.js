import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Grid from '@mui/material/Grid';

import { Sidebar, SidebarContents } from "./Sidebar";
import Navbar from "./Navbar";

const PagesContainer = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = (value) => {
        setShowSidebar(value);
    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Grid item>
                <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
            </Grid>

            <Grid item className="sidebar" sx={{ display: { xs: 'none', lg: 'block' } }} xs={2}>
                <SidebarContents />
            </Grid>

            <Grid item xs>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item sx={{ width: "100%" }}>
                        <Navbar toggleSidebar={toggleSidebar} />
                    </Grid>

                    <Grid item sx={{ padding: "0px 25px", width: "100%" }}>
                        <Outlet />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default PagesContainer;