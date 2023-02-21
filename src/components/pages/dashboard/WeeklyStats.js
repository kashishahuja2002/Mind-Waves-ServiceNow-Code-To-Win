import React from "react";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import { statsList } from "../../Constants";
import Graph from "./Graph";

const UserData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];

const GraphCard = (obj) => {
  return (
    <Card variant="outlined" className="weekly-stat-card" >
      <Box className="container-box">
        <Box className="chart-box"
          sx={{ 
            // backgroundColor: `${obj.color}`,
            backgroundColor: "#ffffff",
            width: "100%"
          }}
        >
          <Graph graphData={UserData} color={obj.color} />
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