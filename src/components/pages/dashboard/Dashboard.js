import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import DailyStats from "./DailyStats";
import WeeklyStats from "./WeeklyStats";

import '../../../styles/pages/Dashboard.scss';
import { getGoogleFitData } from "../../../redux/dashboard/DashboardAction";
import { updateBarLoading } from "../../../redux/Actions";

const Dashboard = () => {

    const dispatch = useDispatch();

    function getPreviousMonday()
    {
        var date = new Date();
        var day = date.getDay();
        var prevMonday = new Date();
        if(date.getDay() == 0){
            prevMonday.setDate(date.getDate() - 7);
        }
        else{
            prevMonday.setDate(date.getDate() - (day-1));
        }

        return prevMonday;
    }

    const formatDate = (value) => {
        var date = new Date(value);

        date = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();

        return date;
    }

    const getMilliSecond = (date) => {
        return (new Date(`${date} 00:00:00`).getTime());
    }

    const getStartEndTime = () => {
        const startDate = formatDate(getPreviousMonday());

        var endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 7);
        endDate = formatDate(endDate);

        const startTime = getMilliSecond(startDate);
        const endTime = getMilliSecond(endDate);

        return {startTime, endTime};
    }

    useEffect(() => {
        dispatch(updateBarLoading(true));
        const time = getStartEndTime();

        const stepCountBody = {
            "aggregateBy": [{
                "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
            }],
            "bucketByTime": { "durationMillis": 86400000 },
            "startTimeMillis": time.startTime,		
            "endTimeMillis": time.endTime
        }
        dispatch(getGoogleFitData(stepCountBody, "STEP_COUNT"));

        const heartPointsBody = {
            "aggregateBy": [{
                "dataSourceId": "derived:com.google.heart_minutes:com.google.android.gms:merge_heart_minutes"
            }],
            "bucketByTime": { "durationMillis": 86400000 },
            "startTimeMillis": time.startTime,		
            "endTimeMillis": time.endTime
        }
        dispatch(getGoogleFitData(heartPointsBody, "HEART_POINTS"));

        const caloriesBurnedBody = {
            "aggregateBy": [{
                "dataSourceId": "derived:com.google.calories.expended:com.google.android.gms:merge_calories_expended"
            }],
            "bucketByTime": { "durationMillis": 86400000 },
            "startTimeMillis": time.startTime,		
            "endTimeMillis": time.endTime
        }
        dispatch(getGoogleFitData(caloriesBurnedBody, "CALORIES_BURNED"));
    }, [])

    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            className="dashboard"
        >
            <Grid item sx={{ mb: 3 }}>
                <Typography variant="body" gutterBottom className="stat-title">Daily Stats</Typography>
                <DailyStats />
            </Grid>

            <Grid item sx={{ width: "100%" }}>
                <Typography variant="body" gutterBottom className="stat-title">Weekly Stats</Typography>
                <WeeklyStats />
            </Grid>
        </Grid>
    );
}

export default Dashboard;