import React from "react";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import DailyStats from "./DailyStats";
import WeeklyStats from "./WeeklyStats";

import '../../../styles/pages/dashboard/dashboard.scss';

const Dashboard = () => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            className="dashboard"
        >
            <Grid item sx={{ mb: 3 }}>
                <Typography variant="body" gutterBottom className="stat-title">Daily Stats</Typography>
                <DailyStats />
            </Grid>

            <Grid item sx={{ width: "100%" }}>
                <Typography variant="body" gutterBottom className="stat-title">Weekly Stats</Typography>
                <WeeklyStats />
            </Grid>
        </Grid>
    );
}

export default Dashboard;