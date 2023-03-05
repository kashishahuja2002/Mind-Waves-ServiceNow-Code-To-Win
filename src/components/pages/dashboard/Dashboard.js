import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import moment from 'moment';
import 'moment-timezone';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import DailyStats from "./DailyStats";
import WeeklyStats from "./WeeklyStats";
import { formatDate, getStartMilliSecond, getEndMilliSecond } from "../../Helper";
import { getWeeklyGoogleFitData, getWeeklyData } from "../../../redux/dashboard/DashboardAction";
import { updateBarLoading } from "../../../redux/Actions";

import '../../../styles/pages/Dashboard.scss';

const Dashboard = () => {

    const dispatch = useDispatch();

    const getWeekStartEndTime = () => {
        let startDate = formatDate(moment().startOf('isoweek'));
        let endDate = formatDate(moment().endOf('isoweek'));

        const startTime = getStartMilliSecond(startDate);
        const endTime = getEndMilliSecond(endDate);

        return {startTime, endTime};
    }

    useEffect(() => {
        dispatch(updateBarLoading(true));
        const time = getWeekStartEndTime();

        const stepCountBody = {
            "aggregateBy": [{
                "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
            }],
            "bucketByTime": { "durationMillis": 86400000 },
            "startTimeMillis": time.startTime,		
            "endTimeMillis": time.endTime
        }
        dispatch(getWeeklyGoogleFitData(stepCountBody, "WEEKLY_STEP_COUNT"));

        const heartPointsBody = {
            "aggregateBy": [{
                "dataSourceId": "derived:com.google.heart_minutes:com.google.android.gms:merge_heart_minutes"
            }],
            "bucketByTime": { "durationMillis": 86400000 },
            "startTimeMillis": time.startTime,		
            "endTimeMillis": time.endTime
        }
        dispatch(getWeeklyGoogleFitData(heartPointsBody, "WEEKLY_HEART_POINTS"));

        const caloriesBurnedBody = {
            "aggregateBy": [{
                "dataSourceId": "derived:com.google.calories.expended:com.google.android.gms:merge_calories_expended"
            }],
            "bucketByTime": { "durationMillis": 86400000 },
            "startTimeMillis": time.startTime,		
            "endTimeMillis": time.endTime
        }
        dispatch(getWeeklyGoogleFitData(caloriesBurnedBody, "WEEKLY_CALORIES_BURNED"));
    }, [])

    // Weekly Data
    useEffect(() => {
        dispatch(getWeeklyData("user/weeklyactivity", {}))
    }, []);

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