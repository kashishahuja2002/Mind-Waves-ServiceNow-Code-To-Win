import React from "react";

import Grid from '@mui/material/Grid';

import { Sidebar, SidebarContents } from "./Sidebar";

const PagesContainer = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
        >
            <Grid item><Sidebar /></Grid>
            <Grid item className="sidebar" style={{ paddingLeft: "0px" }}><SidebarContents /></Grid>
        </Grid>
    );
}

export default PagesContainer;