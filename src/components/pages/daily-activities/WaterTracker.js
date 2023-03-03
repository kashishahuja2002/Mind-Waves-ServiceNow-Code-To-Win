import React, { useState, useEffect } from 'react';

import { Grid } from '@mui/material';
import Card from '@mui/material/Card';

import WaterLevel from './WaterLevel';
import TargetChart from './TragetChart';
import History from './History';

import '../../../styles/pages/daily-activities/WaterTracker.scss';

export default function WaterTracker() {

    const [waterLevel, setWaterLevel] = useState(0);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        setDrinkTimeState();
    }, [])

    const setDrinkTimeState = () => {
        if (localStorage.drinkTime) {
            setHistory(localStorage.drinkTime.split('|'))
        }
        else {
            setHistory([]);
        }
    };

    const saveToLocalStorage = () => {
        if (localStorage.drinkTime) {
            localStorage.drinkTime =
                `${new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }) + " | "}` +
                localStorage.drinkTime
        } else {
            localStorage.drinkTime =
                new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })
        }
    };

    const handleClick = () => {
        localStorage.setItem('waterLevel', waterLevel+10);
        if (waterLevel < 100) {
            setWaterLevel(waterLevel + 10);
        }

        if (typeof Storage !== 'undefined') {
            saveToLocalStorage();
        } else {
            console.error('local storage not supported');
        }
        
        setDrinkTimeState();
    };

    // for history card height
    const [historyCardHeight, setHistoryCardHeight] = useState(0);
    useEffect(() => {
        let leftCard = document.querySelector("#leftCard");
        if (leftCard) {
            setHistoryCardHeight(leftCard.clientHeight - 25);
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
                <Card id="leftCard" className="whiteBox waterCard">
                    <WaterLevel waterLevel={waterLevel} onClick={handleClick} />
                    <div className='info-txt'>
                        Click on the circle to confirm that you have just drunk one glass of water
                    </div>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Card className="whiteBox historyCard" sx={{ height: historyCardHeight }}>
                    <History time={history} tab="water" />
                </Card>
            </Grid>

            <Grid item xs={12}>
                <Card className="whiteBox targetCard">
                    <TargetChart color="#3e98c7" values={waterLevel} />
                </Card>
            </Grid>
        </Grid>
    );
}
