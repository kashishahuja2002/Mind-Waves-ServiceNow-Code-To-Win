import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import moment from 'moment';
import 'moment-timezone';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import DailyStats from "./DailyStats";
import WeeklyStats from "./WeeklyStats";
import { formatDate, getStartMilliSecond, getEndMilliSecond } from "../../Helper";
import { getGoogleFitData, getWeeklyData } from "../../../redux/dashboard/DashboardAction";
import { updateBarLoading } from "../../../redux/Actions";
import { googleFitUrl } from "../../Constants";

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

    const getMonthStartEndTime = () => {
        let startDate = formatDate(moment().startOf('month'));
        let endDate = formatDate(moment().endOf('month'));

        const startTime = getStartMilliSecond(startDate);
        const endTime = getEndMilliSecond(endDate);

        return {startTime, endTime};
    }

    useEffect(() => {
        dispatch(updateBarLoading(true));
        const weeklyTime = getWeekStartEndTime();
        const monthlyTime = getMonthStartEndTime();

        const body = (url, time) => ({
            "aggregateBy": [{
                "dataSourceId": url
            }],
            "bucketByTime": { "durationMillis": 86400000 },
            "startTimeMillis": time.startTime,		
            "endTimeMillis": time.endTime
        })

        dispatch(getGoogleFitData(body(googleFitUrl.stepsCount, weeklyTime), "WEEKLY_STEP_COUNT"));
        dispatch(getGoogleFitData(body(googleFitUrl.heartPoints, weeklyTime), "WEEKLY_HEART_POINTS"));
        dispatch(getGoogleFitData(body(googleFitUrl.caloriesBurned, weeklyTime), "WEEKLY_CALORIES_BURNED"));

        dispatch(getGoogleFitData(body(googleFitUrl.stepsCount, monthlyTime), "MONTHLY_STEP_COUNT"));
        dispatch(getGoogleFitData(body(googleFitUrl.heartPoints, monthlyTime), "MONTHLY_HEART_POINTS"));
        dispatch(getGoogleFitData(body(googleFitUrl.caloriesBurned, monthlyTime), "MONTHLY_CALORIES_BURNED"));
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