import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import IconButton from '@mui/material/IconButton';

import History from './History';
import TargetChart from './TragetChart';
import { getWeeklyData } from "../../../redux/dashboard/DashboardAction";
import { addExercise } from "../../../redux/daily-activities/DailyActivitiesActions";

import '../../../styles/pages/daily-activities/ExerciseTracker.scss';

const ExerciseTracker = () => {

    const weeklyData = useSelector((store) => store.dashboard.weeklyData);
    const user = useSelector((store) => store.profile.user);
    const dispatch = useDispatch();

    // Weekly Data API
    useEffect(() => {
        dispatch(getWeeklyData("user/weeklyactivity", {}))
    }, []);

    const [targetData, setTargetData] = useState([0,0,0,0,0,0,0]);
    useEffect(() => {
        if(weeklyData.length > 0) {
            let td = [];
            weeklyData.forEach(element => {
                td.push(Math.ceil(element.activity.exercise)); 
            });
    
            setTargetData(td);
        }
    }, [weeklyData]);

    const [running, setRunning] = useState(false);
    const [currentTimeSec, setCurrentTimeSec] = useState(0);
    const [currentTimeMin, setCurrentTimeMin] = useState(0);
    const [history, setHistory] = useState([]);
    const [countKey, setCountKey] = useState(0);

    useEffect(() => {
        setHistoryState();
    }, [])

    const setHistoryState = () => {
        if (localStorage.exerciseTime) {
            setHistory(localStorage.exerciseTime.split('|'));
        } else {
            setHistory([]);
        }
    };

    const formatTime = (val, ...rest) => {
        let value = val.toString();
        if (value.length < 2) {
            value = '0' + value;
        }
        if (rest[0] === 'ms' && value.length < 3) {
            value = '0' + value;
        }
        return value;
    };

    // Stopwatch
    const [watch, setWatch] = useState(null);
    const start = () => {
        if (!running) {
            setRunning(true);
            setWatch(setInterval(() => {setCurrentTimeSec(currentTimeSec => currentTimeSec + 1)}, 1000));
        }
    };

    useEffect(() => {
        if (currentTimeSec >= 60) {
            setCurrentTimeMin(currentTimeMin => currentTimeMin + 1);
            setCurrentTimeSec(0);
        }
    }, [currentTimeSec])

    const stop = () => {
        setRunning(false);
        clearInterval(watch);
        setHistoryState();
    };

    const saveToLocalStorage = () => {
        if (localStorage.exerciseTime) {
            localStorage.exerciseTime =
                `${formatTime(
                    currentTimeMin
                )}:${formatTime(
                    currentTimeSec
                )} :: ${new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })}` + " | " + localStorage.exerciseTime
        }
        else {
            localStorage.exerciseTime = `${formatTime(
                currentTimeMin
            )}:${formatTime(
                currentTimeSec
            )} :: ${new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })} `;
        }
    };

    const reset = () => {
        if (typeof Storage !== 'undefined') {
            saveToLocalStorage();
        } else {
            console.error('local storage not supported');
        }

        const totalSec = (currentTimeMin*60) + currentTimeSec;
        let day = new Date().getDay();
        const newTargetData = [...targetData];
        newTargetData[day] = (targetData[day] != undefined ? targetData[day] : 0) + totalSec;
        setTargetData(newTargetData);

        const body = {
            exercise: totalSec
        }
        dispatch(addExercise("user/addexercise", body));

        let newKey = countKey + 1;
        setCurrentTimeSec(0);
        setCurrentTimeMin(0);
        setRunning(false);
        setCountKey(newKey);

        clearInterval(watch);
        setHistoryState();
    };

    // for history card height
    const [historyCardHeight, setHistoryCardHeight] = useState(0);
    useEffect(() => {
        let leftCard = document.querySelector("#leftCard");
        if (leftCard) {
            setHistoryCardHeight(leftCard.clientHeight);
        }
    }, []);

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={3}
        >
            <Grid item xs={12} sm={6}>
                <Card id="leftCard" className="whiteBox exerciseCard">
                    <CountdownCircleTimer
                        key={countKey}
                        isPlaying={running}
                        duration={60}
                        colors="#d9d9d9"
                        trailColor='#652fa1'
                        strokeWidth="12"
                        size={140}
                        onComplete={() => {
                            return { shouldRepeat: true, delay: 0 }
                        }}
                    >
                        {({ remainingTime }) => running === false
                            ? <IconButton onClick={start}><PlayArrowOutlinedIcon className="play-icon" /></IconButton>
                            : <IconButton onClick={stop}><PauseOutlinedIcon className="play-icon" /></IconButton>
                        }
                    </CountdownCircleTimer>

                    <div className="stopwatch">
                        {formatTime(currentTimeMin)}:
                        {formatTime(currentTimeSec)}
                    </div>

                    <div onClick={reset} className="endSessionButton" >
                        End Session
                    </div>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Card className="whiteBox historyCard" sx={{ height: historyCardHeight }}>
                    <History time={history} tab="exercise" />
                </Card>
            </Grid>

            <Grid item xs={12}>
                <Card className="whiteBox targetCard">
                    <TargetChart color="#652fa1" data={targetData} goal={user.exerciseGoal} />
                </Card>
            </Grid>
        </Grid>
    );
}

export default ExerciseTracker;