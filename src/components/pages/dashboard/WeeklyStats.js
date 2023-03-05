import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import { statsList } from "../../Constants";
import Graph from "./Graph";

const GraphCard = (obj, chartData) => {
  return (
    <Card variant="outlined" className="whiteBox weekly-stat-card" >
      <Box className="container-box">
        <Box className="whiteBox chart-box"
          sx={{
            backgroundColor: "#ffffff",
            width: "100%",
          }}
        >
          <Graph graphData={chartData[obj.key]} color={obj.color} />
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

  const [chartData, setChartData] = useState(
    {
      stepsCount: [],
      heartPoints: [],
      caloriesBurned: [],
      hydrationRate: [],
      exerciseDuration: [],
      meditationTime: [],
      mood: []
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
    let sc = [], hp = [], cb = [], hr=[], ed=[], mt=[], m=[];

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

    let data = dashboard.weeklyData;
    if(data.length > 0) {
      data.forEach(element => {
        hr.push(element.activity.water);
        ed.push(element.activity.exercise);
        mt.push(element.activity.meditation);
        m.push(element.activity.mood);
      });
    }

    setChartData((prev) => ({
      ...prev,
      stepsCount: sc,
      heartPoints: hp,
      caloriesBurned: cb,
      hydrationRate: hr,
      exerciseDuration: ed,
      meditationTime: mt,
      mood: m
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
          <Grid item key={`weekly-stat-${index}`} xs={12} sm={6} md={4}>{GraphCard(obj, chartData)}</Grid>
        )
      )}
    </Grid>
  );
}

export default WeeklyStats;