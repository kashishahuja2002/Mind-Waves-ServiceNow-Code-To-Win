import React from "react";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { statsList } from "../../Constants";

const StatCard = (obj) => {
  return (
    <Card variant="outlined" className="daily-stat-card ">
        <Box className="icon-box"
          sx={{ 
            // backgroundColor: `${obj.color}`,
            backgroundColor: "#fff",
            svg :{
              color: `${obj.color}`
            }
          }}
        >
          {obj.icon}
        </Box>
        <Box sx={{textAlign: "right"}}>
          <span> {obj.title} </span>
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
      justifyContent="flex-start"
      alignItems="centre"
      className="daily-stats"
    >
      {statsList.map((obj, index) => (
          <Grid item key={`daily-stat-${index}`} xs={12} sm={6} md={4} lg={3}> {StatCard(obj)} </Grid>
        )
      )}
    </Grid>
  );
}

export default DailyStats;