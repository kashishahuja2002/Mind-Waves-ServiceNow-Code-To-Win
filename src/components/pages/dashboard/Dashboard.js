import React from "react";

import Grid from '@mui/material/Grid';

import DailyStats from "./daily-stats/DailyStats";

const Dashboard = () => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            className="dashboard"
        >
            <Grid item sx={{ width: "100%" }}>
                <DailyStats />
            </Grid>

            <Grid item>
                Weekly Stats
            </Grid>
        </Grid>
    );
}

export default Dashboard;