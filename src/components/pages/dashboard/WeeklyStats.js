import React from "react";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import { statsList } from "../../Constants";
import ChartImage from '../../../assets/images/chart.png';

const GraphCard = (obj) => {
  return (
    <Card variant="outlined" className="weekly-stat-card" >
      <Box className="container-box">
        <Box className="chart-box"
          sx={{ backgroundColor: `${obj.color}`, overflow: "hidden" }}
        >
          <img src={ChartImage} alt="stat-chart" />
        </Box>
        <Box className="title-box">
            {obj.title}
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
      {statsList.map((obj, index) => (
          <Grid item key={`weekly-stat-${index}`} xs={12} sm={6} md={4}>{GraphCard(obj)}</Grid>
        )
      )}
    </Grid>
  );
}

export default WeeklyStats;