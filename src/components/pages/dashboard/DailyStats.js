import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { statsList } from "../../Constants";
import { formatDate, getMilliSecond } from '../../Helper';

const StatCard = (obj, dailyData) => {
  return (
    <Card variant="outlined" className="whiteBox daily-stat-card ">
        <Box className="whiteBox icon-box"
          sx={{ 
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
          <Typography variant="h4" gutterBottom> {dailyData[obj.key]} </Typography>
        </Box>
    </Card>
  );
}

const DailyStats = () => {
  const dashboard = useSelector((store) => store.dashboard);

  const [dailyData, setDailyData] = useState(
    {
      stepsCount: 0,
      heartPoints: 0,
      caloriesBurned: 0,
      hydrationRate: 0,
      exerciseDuration: 0,
      meditationTime: 0,
      mood: 0
    }
  );

  const getStat = (val, time) => {
    var result = dashboard[val].filter((obj) => obj.startTimeMillis == time);

    if(result.length > 0) {
      result = result[0].dataset[0].point;
      return result.length ? result[0].value[0] : 0;
    }

    return 0;
  }

  useEffect(() => {
    const date = formatDate(new Date());
    const todayTime = getMilliSecond(date);

    if(dashboard.stepsCount.length > 0) {
      const stat = getStat("stepsCount", todayTime)
      setDailyData((prev) => ({
        ...prev,
        stepsCount: stat ? stat.intVal : 0,
      }))
    }

    if(dashboard.heartPoints.length > 0) {
      const stat = getStat("heartPoints", todayTime)
      setDailyData((prev) => ({
        ...prev,
        heartPoints: stat ? Math.ceil(stat.fpVal) : 0,
      }))
    }

    if(dashboard.caloriesBurned.length > 0) {
      const stat = getStat("caloriesBurned", todayTime)
      setDailyData((prev) => ({
        ...prev,
        caloriesBurned: stat ? Math.ceil(stat.fpVal) : 0,
      }))
    }
  }, [dashboard]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="centre"
      className="daily-stats"
    >
      {statsList.map((obj) => (
          <Grid item key={`daily-stat-${obj.key}`} xs={12} sm={6} md={4} lg={3}> {StatCard(obj, dailyData)} </Grid>
        )
      )}
    </Grid>
  );
}

export default DailyStats;