import React from "react";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import StatCards from "./StatCards";

import '../../../../styles/pages/dashboard/dailyStats.scss';

const DailyStats = () => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="centre"
            className="daily-stats"
        >
            <Grid item>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    Daily Stats
                </Typography>
            </Grid>

            <Grid item>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{ marginTop: "10px" }}
                >
                    <Grid item><StatCards /></Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default DailyStats;