import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import { statsList } from "../../Constants";
import Graph from "./Graph";

const GraphCard = (obj, weeklyData) => {
  return (
    <Card variant="outlined" className="whiteBox weekly-stat-card" >
      <Box className="container-box">
        <Box className="whiteBox chart-box"
          sx={{
            backgroundColor: "#ffffff",
            width: "100%",
          }}
        >
          <Graph graphData={weeklyData[obj.key]} color={obj.color} />
        </Box>
        <Box className="title-box">
            {obj.title}
        </Box>
      </Box>
    </Card>
  );
}

const WeeklyStats = () => {
  const dashboard = useSelector((store) => store.dashboard);

  const [weeklyData, setWeeklyData] = useState(
    {
      stepsCount: [0, 0, 0, 0, 0, 0, 0],
      heartPoints: [0, 0, 0, 0, 0, 0, 0],
      caloriesBurned: [0, 0, 0, 0, 0, 0, 0],
      hydrationRate: [0, 0, 0, 0, 0, 0, 0],
      exerciseDuration: [0, 0, 0, 0, 0, 0, 0],
      meditationTime: [0, 0, 0, 0, 0, 0, 0],
      mood: [0, 0, 0, 0, 0, 0, 0]
    }
  );

  const getStat = (element) => {
    const result = element.dataset[0].point;
    if(result.length > 0) {
      return result[0].value[0];
    }
    return 0;
  }

  useEffect(() => {
    let sc = [], hp = [], cb = [];

    if(dashboard.stepsCount.length > 0) {
      dashboard.stepsCount.forEach(element => {
        const stat = getStat(element);
        sc.push(stat ? stat.intVal : 0);
      })
    }

    if(dashboard.heartPoints.length > 0) {
      dashboard.heartPoints.forEach(element => {
        const stat = getStat(element);
        hp.push(stat ? Math.ceil(stat.fpVal) : 0);
      })
    }

    if(dashboard.caloriesBurned.length > 0) {
      dashboard.caloriesBurned.forEach(element => {
        const stat = getStat(element);
        cb.push(stat ? Math.ceil(stat.fpVal) : 0);
      })
    }

    setWeeklyData((prev) => ({
      ...prev,
      stepsCount: sc,
      heartPoints: hp,
      caloriesBurned: cb,
    }))

  }, [dashboard])

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="centre"
      className="weekly-stats"
    >
      {statsList.map((obj, index) => (
          <Grid item key={`weekly-stat-${index}`} xs={12} sm={6} md={4}>{GraphCard(obj, weeklyData)}</Grid>
        )
      )}
    </Grid>
  );
}

export default WeeklyStats;