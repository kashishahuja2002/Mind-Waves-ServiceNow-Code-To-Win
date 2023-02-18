import React from "react";

import Grid from '@mui/material/Grid';

import { Sidebar, SidebarContents } from "./Sidebar";

const PagesContainer = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
        >
            <Grid item sx={{ display: { xs: 'block', lg: 'none' } }}>
                <Sidebar />
            </Grid>

            <Grid item className="sidebar" sx={{ paddingLeft: "0px", display: { xs: 'none', lg: 'block' } }}>
                <SidebarContents />
            </Grid>

            <Grid item>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item>navbar</Grid>
                    <Grid item>Outlet</Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default PagesContainer;