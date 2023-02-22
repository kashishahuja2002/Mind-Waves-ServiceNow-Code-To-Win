import React from "react";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';  // Dashboard Icon

const StatCard = () => {
  return (
    <Card variant="outlined" className="daily-stat-card ">
      <Box className="icon-box"><DashboardIcon /></Box>
      <Box>
        <span> Steps count </span>
        <Typography variant="h4" gutterBottom> 2,300 </Typography>
      </Box>
    </Card>
  );
}

const DailyStats = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="centre"
      className="daily-stats"
    >
      <Grid item xs> {StatCard()} </Grid>
      <Grid item xs> {StatCard()} </Grid>
      <Grid item xs> {StatCard()} </Grid>
      <Grid item xs> {StatCard()} </Grid>
      <Grid item xs> {StatCard()} </Grid>
      <Grid item xs> {StatCard()} </Grid>
      <Grid item xs> {StatCard()} </Grid>
    </Grid>
  );
}

export default DailyStats;