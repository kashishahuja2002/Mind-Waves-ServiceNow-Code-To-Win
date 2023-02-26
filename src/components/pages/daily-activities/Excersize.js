import React, { useState } from 'react';
import '../../../styles/pages/daily-activities/WaterTracker/WaterTracker.scss';
import { Grid } from '@mui/material';
import 'react-circular-progressbar/dist/styles.css';
import Card from '@mui/material/Card';
import TargetChart from './TragetChart';
import Stopwatch from './Stopwatch';
import History from './History';

export default function Excersize() {
    const color = "#444"
    const [isPlaying, setIsPlaying] = useState(false);

    const toggle = () => {
        isPlaying == true ? setIsPlaying(false) : setIsPlaying(true);
    }
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
                        <Card className="waterCard">
                            <Stopwatch />
                        </Card>
                    </Grid>

                </Grid>

                <Grid item xs
                >
                    <div className='waterTracker-card'></div>
                    <Card className="waterCard">
                    </Card>
                </Grid>
                <Grid xs={12} className="target-chart-grid">
                    <div className='waterTracker-card'></div>
                    <Card className="waterCard">
                        <TargetChart color="#652fa1" values={80} />
                    </Card>
                </Grid>
            </Grid>
            { /* <Grid container spacing={3}>
                <Grid item xs>
                    <div className='side-info'>
                        <Add style={{ width: "50px ", color: "#1c637c" }} />
                        <LocalDrinkIcon style={{ width: "50px ", color: "#1c637c" }} />
                    </div>
                </Grid>
                <Grid item xs>
                    <Glass />
                    {/*<div>
                        <div className="percentage-container">
                            <div className="water" style={{ height: `${waterLevel}%` }}></div>
                            <div>{`${waterLevel}%`}</div>
                        </div>
                    </div>
        </Grid>
            </Grid >*/}

        </div >
    );




}
//apk
//prioritizing
