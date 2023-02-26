import React from 'react';
import { Grid } from '@mui/material';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { days } from '../../Constants';

export default function TragetChart(props) {
    const { color } = props;
    return (
        <div>
            <Grid item xs={12} display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <div className="target-chart" >
                    <div className='card-content-heading-target-head'>Target Chart</div>

                    <Grid container spacing={1} display="flex" justifyContent="space-between" padding="20px">

                        {days.map((obj) => (
                            <Grid item xs>
                                <div className='progress-bar'>
                                    <CircularProgressbar value={props.values} stroke="#0f1315" strokeWidth="6" styles={buildStyles({
                                        // Colors
                                        textColor: color,
                                        pathColor: color,

                                    })}
                                        text={`${props.values}%`} />
                                    <div className='stamp-txt'>{obj.name}</div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Grid >
        </div >
    )
}
