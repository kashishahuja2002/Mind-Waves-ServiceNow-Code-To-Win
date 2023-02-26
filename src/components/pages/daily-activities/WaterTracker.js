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
import { CircularProgressbar } from 'react-circular-progressbar';

export default function WaterTracker() {
    const [waterLevel, setWaterLevel] = useState(20);

    const handleClick = () => {
        if (waterLevel < 100) {
            setWaterLevel(waterLevel + 10);
        }
        console.log(waterLevel);
    };

    const left = (100 - waterLevel) / 10;
    return (
        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid item xs display="flex"
                    justifyContent="center"
                >
                    <Grid item xs
                    >
                        <div className='waterTracker-card' onClick={handleClick}></div>
                        <Card className="waterCard">
                            <div className='card-content'>
                                <div className='card-content-heading'>Goal</div>
                                <div className='card-content-description'>
                                    <CircularProgressbar value={waterLevel} strokeWidth="1" text={`${left}`} />
                                    <div className='stamp-txt card'>Left to drink</div>

                                </div>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item xs
                    >
                        <div className='waterTracker-card' ></div>
                        <Card className="waterCard">
                            <div className='card-content'>
                                <div className='side-info' onClick={handleClick}>
                                    <Add style={{ width: "50px ", color: "#242f53" }} />
                                    <LocalDrinkIcon style={{ width: "50px", color: "#242f53" }} />
                                </div>

                            </div>
                        </Card>
                    </Grid>
                </Grid>

                <Grid item xs
                >
                    <div className='waterTracker-card'></div>
                    <Card className="waterCard">
                        <Glass waterLevel={waterLevel} />
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
