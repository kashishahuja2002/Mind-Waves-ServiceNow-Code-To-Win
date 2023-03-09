import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { statsList } from "../../Constants";
import { formatDate, getStartMilliSecond } from '../../Helper';

const StatCard = (obj, dailyData, activeStat, setActiveStat) => {
  const handleCardClick = () => {
    setActiveStat(obj)
  }
  
  return (
    <Card variant="outlined" className="whiteBox daily-stat-card" onClick={handleCardClick} sx={{borderColor: activeStat.key === obj.key ? obj.color : "#fff"}}>
      <Box className="whiteBox icon-box"
        sx={{
          border: "2px solid #fff",
          borderColor: activeStat.key === obj.key ? obj.color : "#fff",
          svg: {
            color: `${obj.color}`
          }
        }}
      >
        {obj.icon}
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <span> {obj.title} </span>
        <Typography variant="h4" gutterBottom> {dailyData[obj.key]} </Typography>
      </Box>
    </Card>
  );
}

const DailyStats = (props) => {
  const { activeStat, setActiveStat } = props;
  const dashboard = useSelector((store) => store.dashboard);

  const [dailyData, setDailyData] = useState(
    {
      stepsCount: 0,
      heartPoints: 0,
      caloriesBurned: 0,
      hydrationRate: 0,
      exerciseDuration: 0,
      meditationTime: 0,
      mood: 'Neutral'
    }
  );

  const getStat = (val, time) => {
    var result = dashboard[val].filter((obj) => obj.startTimeMillis == time);

    if (result.length > 0) {
      result = result[0].dataset[0].point;
      return result.length ? result[0].value[0] : 0;
    }

    return 0;
  }

  useEffect(() => {
    const date = formatDate(new Date());
    const todayTime = getStartMilliSecond(date);

    if (dashboard.weeklyStepsCount.length > 0) {
      const stat = getStat("weeklyStepsCount", todayTime)
      setDailyData((prev) => ({
        ...prev,
        stepsCount: stat ? stat.intVal : 0,
      }))
    }

    if (dashboard.weeklyHeartPoints.length > 0) {
      const stat = getStat("weeklyHeartPoints", todayTime)
      setDailyData((prev) => ({
        ...prev,
        heartPoints: stat ? Math.ceil(stat.fpVal) : 0,
      }))
    }

    if (dashboard.weeklyCaloriesBurned.length > 0) {
      const stat = getStat("weeklyCaloriesBurned", todayTime)
      setDailyData((prev) => ({
        ...prev,
        caloriesBurned: stat ? Math.ceil(stat.fpVal) : 0,
      }))
    }

    let data = dashboard.weeklyData;
    if(data.length > 0) {
      setDailyData((prev) => ({
        ...prev,
        hydrationRate: data[data.length - 1].activity.water,
        exerciseDuration: data[data.length - 1].activity.exercise,
        meditationTime: data[data.length - 1].activity.meditation,
        mood: (data[data.length - 1].activity.mood === 1 ? "Sad" : (data[data.length - 1].activity.mood === 3 ? "Happy" : "Neutral")),
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
        <Grid item key={`daily-stat-${obj.key}`} xs={12} sm={6} md={4} lg={3}> {StatCard(obj, dailyData, activeStat, setActiveStat)} </Grid>
      )
      )}
    </Grid>
  );
}

export default DailyStats;