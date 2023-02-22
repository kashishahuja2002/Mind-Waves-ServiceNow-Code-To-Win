import React from 'react';
import '../../../styles/pages/WaterTracker/WaterTracker.scss';
import { useState } from 'react';
import { Grid } from '@mui/material';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function WaterTracker() {
    const [waterLevel, setWaterLevel] = useState(20);

    const handleClick = () => {
        if (waterLevel < 100) {
            setWaterLevel(waterLevel + 10);
        }
        console.log(waterLevel);
    };

    return (

        <div>
            <Grid container spacing={3}>
                <Grid item xs>
                    <div className='side-info'>
                        <div className='waterContainer' onClick={handleClick}></div>
                        <span class="current-cups">0/10</span>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div>
                        <div className="percentage-container">
                            <div className="water" style={{ height: `${waterLevel}%` }}></div>
                            <div>{`${waterLevel}%`}</div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs>

                    <div className='side-info'>
                        <span class="current-litres">8</span>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <CircularProgressbar value={66} />
                </Grid>
                <Grid item xs={2}>
                    <CircularProgressbar value={66} />
                </Grid>
                <Grid item xs={2}>
                    <CircularProgressbar value={66} />
                </Grid>
                <Grid item xs={2}>
                    <CircularProgressbar value={66} />
                </Grid>
                <Grid item xs={2}>
                    <CircularProgressbar value={66} />
                </Grid>
                <Grid item xs={2}>
                    <CircularProgressbar value={66} />
                </Grid>
            </Grid>
        </div>
    );




}
