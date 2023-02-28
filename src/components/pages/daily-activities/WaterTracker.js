import React from 'react';
import '../../../styles/pages/daily-activities/Excersize/stopwatch.scss';
import { useState } from 'react';
import { Grid } from '@mui/material';
import 'react-circular-progressbar/dist/styles.css';
import Glass from './Glass';
import Add from "@mui/icons-material/Add";
import Card from '@mui/material/Card';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import TargetChart from './TragetChart';
import { useEffect } from 'react';
import DrinkHistory from './DrinkHistory';

export default function WaterTracker() {

    const [waterLevel, setWaterLevel] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        setDrinkTimeState();
    }, [])
    const setDrinkTimeState = () => {
        if (localStorage.drinkTime) {

            setData(localStorage.drinkTime.split('|'))

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
        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid item xs display="flex"
                    justifyContent="center"
                >
                    <Grid item xs
                    >
                        <div className='waterTracker-card' ></div>
                        <Card className="waterCard" style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <div className='card-content'>

                                <Glass waterLevel={waterLevel} style={{ padding: '20px' }} />
                                <div className='side-info' onClick={handleClick}>
                                    <Add style={{ width: "30px ", color: "#3e98c7" }} />
                                    <LocalDrinkIcon style={{ width: "30px", color: "#3e98c7" }} />
                                </div>
                                <div className='stamp-txt card'>Confirm that you have just drunk water</div>
                            </div>
                        </Card>
                    </Grid>

                </Grid>

                <Grid item xs
                >
                    <div className='waterTracker-card'></div>
                    <Card className="waterCard">
                        <DrinkHistory time={data} />
                    </Card>
                </Grid>

                <Grid xs={12} className="target-chart-grid">
                    <div className='waterTracker-card'></div>
                    <Card className="waterCard">
                        <TargetChart values={waterLevel} />
                    </Card>
                </Grid>
            </Grid>


        </div >
    );




}
//apk
//prioritizing
