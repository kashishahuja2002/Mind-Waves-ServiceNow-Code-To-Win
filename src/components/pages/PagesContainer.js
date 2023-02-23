import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Grid from '@mui/material/Grid';

import { Sidebar, SidebarContents } from "./Sidebar";
import Navbar from "./Navbar";

import '../../styles/pages/pagesContainer.scss';

const PagesContainer = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            className="pagesContainer"
        >
            <Sidebar showSidebar={showSidebar} toggleSidebar={setShowSidebar} />

            <Grid item className="sidebar" sx={{ display: { xs: 'none', lg: 'block' }, backgroundColor: "var(--dark-blue)" }} xs={2}>
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
                        <Navbar toggleSidebar={setShowSidebar} />
                    </Grid>

                    <Grid item className="outlet-box">
                        <Outlet />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default PagesContainer;