import React from "react";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';  // Dashboard Icon

const StatCard = () => {
  return (
    <Card variant="outlined" className="weekly-stat-card ">
        <span> Steps count </span>
    </Card>
  );
}

const WeeklyStats = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="centre"
      className="weekly-stats"
    >
        Graphs
      {/* <Grid item xs> {StatCard()} </Grid>
      <Grid item xs> {StatCard()} </Grid>
      <Grid item xs> {StatCard()} </Grid>
      <Grid item xs> {StatCard()} </Grid>
      <Grid item xs> {StatCard()} </Grid>
      <Grid item xs> {StatCard()} </Grid>
      <Grid item xs> {StatCard()} </Grid> */}
    </Grid>
  );
}

export default WeeklyStats;