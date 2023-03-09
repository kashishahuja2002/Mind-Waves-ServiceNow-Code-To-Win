import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import 'moment-timezone';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import DailyStats from "./DailyStats";
import StatDetails from "./StatDetails";
import { formatDate, getStartMilliSecond, getEndMilliSecond } from "../../Helper";
import { getGoogleFitData, getMonthlyData, getWeeklyData } from "../../../redux/dashboard/DashboardAction";
import { updateBarLoading } from "../../../redux/Actions";
import { googleFitUrl } from "../../Constants";
import { getBadges } from "../../../redux/achievements/AchievementsActions";

import '../../../styles/pages/Dashboard.scss';

const Dashboard = () => {

    const dispatch = useDispatch();
    const dashboard = useSelector((store) => store.dashboard);

    const getWeekStartEndTime = () => {
        let startDate = formatDate(moment().startOf('isoweek'));
        let endDate = formatDate(moment().endOf('isoweek'));

        const startTime = getStartMilliSecond(startDate);
        const endTime = getEndMilliSecond(endDate);

        const durationTime = 86400000;

        return {startTime, endTime, durationTime};
    }

    const getMonthStartEndTime = () => {
        let startDate = formatDate(moment().startOf('month'));
        let endDate = formatDate(moment().endOf('month'));

        const startTime = getStartMilliSecond(startDate);
        const endTime = getEndMilliSecond(endDate);

        const durationTime = 604800000;

        return {startTime, endTime, durationTime};
    }

    useEffect(() => {
        dispatch(updateBarLoading(true));
        const weeklyTime = getWeekStartEndTime();
        const monthlyTime = getMonthStartEndTime();

        const body = (url, time) => ({
            "aggregateBy": [{
                "dataSourceId": url
            }],
            "bucketByTime": { "durationMillis": time.durationTime },
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
    const token = localStorage.getItem('token');
    useEffect(() => {
        if(token) {
            dispatch(getWeeklyData("user/weeklyactivity", {}))
            dispatch(getMonthlyData("user/monthlyactivity", {}))
        }
    }, [token]);

    const getStat = (val) => {
        var result = val.dataset[0].point;
        return result.length ? result[0].value[0] : 0;
    }

    // Badges API
    useEffect(() => {    
        let scs=0, hps=0, cbs=0;

        dashboard.monthlyStepsCount.forEach((element) => {
            let stat = getStat(element)
            scs = scs + (stat ? stat.intVal : 0);
        })

        dashboard.monthlyHeartPoints.forEach((element) => {
            let stat = getStat(element)
            hps = hps + (stat ? Math.ceil(stat.fpVal) : 0);
        })

        dashboard.monthlyCaloriesBurned.forEach((element) => {
            let stat = getStat(element)
            cbs = cbs + (stat ? Math.ceil(stat.fpVal) : 0);
        })

        const params = {
            stepsCount: scs,
            heartPoints: hps,
            caloriesBurned: cbs
        }

        if(token)
            dispatch(getBadges("user/badges", params));
    }, [dashboard, token])

    const [activeStat, setActiveStat] = useState({ key: "stepsCount", title: "Steps Count", color: "#e23270" });

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
                <DailyStats activeStat={activeStat} setActiveStat={setActiveStat} />
            </Grid>

            <Grid item sx={{ width: "100%" }}>
                <Typography variant="body" gutterBottom className="stat-title">{activeStat.title} details</Typography>
                <StatDetails activeStat={activeStat} />
            </Grid>
        </Grid>
    );
}

export default Dashboard;