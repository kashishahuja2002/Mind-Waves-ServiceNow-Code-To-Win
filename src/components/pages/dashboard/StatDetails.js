import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import Graph from "./Graph";

const GraphCard = (obj, type, chartData) => {
  return (
    <Card variant="outlined" className="whiteBox weekly-stat-card" >
      <Box className="container-box">
        <Box className="whiteBox chart-box"
          sx={{
            backgroundColor: "#ffffff",
            width: "100%",
          }}
        >
          <Graph graphData={chartData[obj.key]} color={obj.color} type={type} />
        </Box>
        <Box className="title-box">
            {type === "weekly" ? "Current Week Stats" : "Current Month Stats"}
        </Box>
      </Box>
    </Card>
  );
}

const StatDetails = (props) => {
  const { activeStat } = props;
  const dashboard = useSelector((store) => store.dashboard);

  const [chartWeeklyData, setChartWeeklyData] = useState(
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

  const [chartMonthlyData, setChartMonthlyData] = useState(
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
    let wsc = [], whp = [], wcb = [], whr=[], wed=[], wmt=[], wm=[];

    if(dashboard.weeklyStepsCount.length > 0) {
      dashboard.weeklyStepsCount.forEach(element => {
        const stat = getStat(element);
        wsc.push(stat ? stat.intVal : 0);
      })
    }

    if(dashboard.weeklyHeartPoints.length > 0) {
      dashboard.weeklyHeartPoints.forEach(element => {
        const stat = getStat(element);
        whp.push(stat ? Math.ceil(stat.fpVal) : 0);
      })
    }

    if(dashboard.weeklyCaloriesBurned.length > 0) {
      dashboard.weeklyCaloriesBurned.forEach(element => {
        const stat = getStat(element);
        wcb.push(stat ? Math.ceil(stat.fpVal) : 0);
      })
    }

    let weeklyData = dashboard.weeklyData;
    if(weeklyData.length > 0) {
      weeklyData.forEach(element => {
        whr.push(element.activity.water);
        wed.push(element.activity.exercise);
        wmt.push(element.activity.meditation);
        wm.push(element.activity.mood);
      });
    }

    setChartWeeklyData((prev) => ({
      ...prev,
      stepsCount: wsc,
      heartPoints: whp,
      caloriesBurned: wcb,
      hydrationRate: whr,
      exerciseDuration: wed,
      meditationTime: wmt,
      mood: wm
    }))

    let msc = [], mhp = [], mcb = [], mhr=[], med=[], mmt=[], mm=[];

    if(dashboard.monthlyStepsCount.length > 0) {
      dashboard.monthlyStepsCount.forEach(element => {
        const stat = getStat(element);
        msc.push(stat ? stat.intVal : 0);
      })
    }

    if(dashboard.monthlyHeartPoints.length > 0) {
      dashboard.monthlyHeartPoints.forEach(element => {
        const stat = getStat(element);
        mhp.push(stat ? Math.ceil(stat.fpVal) : 0);
      })
    }

    if(dashboard.monthlyCaloriesBurned.length > 0) {
      dashboard.monthlyCaloriesBurned.forEach(element => {
        const stat = getStat(element);
        mcb.push(stat ? Math.ceil(stat.fpVal) : 0);
      })
    }

    let monthlyData = dashboard.monthlyData;
    if(monthlyData.length > 0) {
      monthlyData.forEach(element => {
        mhr.push(element.activity.water);
        med.push(element.activity.exercise);
        mmt.push(element.activity.meditation);
        mm.push(element.activity.mood);
      });
    }

    setChartMonthlyData((prev) => ({
      ...prev,
      stepsCount: msc,
      heartPoints: mhp,
      caloriesBurned: mcb,
      hydrationRate: mhr,
      exerciseDuration: med,
      meditationTime: mmt,
      mood: mm
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
      <Grid item key={`statDetails-weekly`} xs={12} sm={6}>{GraphCard(activeStat, "weekly", chartWeeklyData)}</Grid>
      <Grid item key={`statDetails-monthly`} xs={12} sm={6}>{GraphCard(activeStat, "monthly", chartMonthlyData)}</Grid>
    </Grid>
  );
}

export default StatDetails;