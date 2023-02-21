import React from "react";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

const GraphCard = () => {
  return (
    <Card variant="outlined" className="weekly-stat-card" >
      <Box className="container-box">
        <Box className="chart-box">
            Chart
        </Box>
        <Box className="title-box">
            Description/ title
        </Box>
      </Box>
    </Card>
  );
}

const WeeklyStats = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="centre"
      className="weekly-stats"
    >
        <Grid item xs={12} sm={6} md={4}>{GraphCard()}</Grid>
        <Grid item xs={12} sm={6} md={4}>{GraphCard()}</Grid>
        <Grid item xs={12} sm={6} md={4}>{GraphCard()}</Grid>
        <Grid item xs={12} sm={6} md={4}>{GraphCard()}</Grid>
        <Grid item xs={12} sm={6} md={4}>{GraphCard()}</Grid>
        <Grid item xs={12} sm={6} md={4}>{GraphCard()}</Grid>
        <Grid item xs={12} sm={6} md={4}>{GraphCard()}</Grid>
    </Grid>
  );
}

export default WeeklyStats;