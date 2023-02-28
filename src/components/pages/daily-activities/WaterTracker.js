import React, { useState, useEffect } from 'react';

import { Grid, Box } from '@mui/material';
import Add from "@mui/icons-material/Add";
import Card from '@mui/material/Card';

import WaterLevel from './WaterLevel';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import TargetChart from './TragetChart';
import DrinkHistory from './DrinkHistory';

import '../../../styles/pages/daily-activities/Water.scss';

// import '../../../styles/pages/daily-activities/Excersize/stopwatch.scss';
// import 'react-circular-progressbar/dist/styles.css';

export default function WaterTracker() {

    const [waterLevel, setWaterLevel] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        setDrinkTimeState();
    }, [])

    const setDrinkTimeState = () => {
        if (localStorage.drinkTime) {
            setData(localStorage.drinkTime.split('|').slice(0, 5))
        }
        else {
            setData([]);
        }
        console.log(data);
    };

    const saveToLocalStorage = () => {
        setDrinkTimeState();
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
        if (waterLevel < 100) {
            setWaterLevel(waterLevel + 10);
        }
        localStorage.setItem('waterLevel', waterLevel);
        console.log(waterLevel);
        saveToLocalStorage();
        setDrinkTimeState();
    };

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={3}
        >
            <Grid item xs={12} sm={6}>
                <Card className="whiteBox waterCard">
                    <WaterLevel waterLevel={waterLevel} onClick={handleClick} />
                    <div className='info-txt'>
                        Click on the cirle to confirm that you have just drunk water
                    </div>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Card className="whiteBox waterCard">
                    <DrinkHistory time={data} />
                </Card>
            </Grid>

            <Grid item xs={12}>
                <Card className="whiteBox waterCard">
                    <TargetChart values={waterLevel} />
                </Card>
            </Grid>
        </Grid>
    );
}
