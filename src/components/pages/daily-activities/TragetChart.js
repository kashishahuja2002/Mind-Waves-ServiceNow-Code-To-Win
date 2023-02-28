import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

import { days } from '../../Constants';

export default function TragetChart(props) {
    const { color } = props;

    return (
        <>
            <Typography variant="body" gutterBottom className="title">Weekly Target Chart</Typography>

            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                className="chartContainer"
                spacing={"5px"}
            >
                {days.map((obj) => (
                    <Grid key={`day-${obj.name}`} item xs={1.7} sm={1.5} md={1.3}>
                        <CircularProgressbar value={props.values} stroke="#0f1315" strokeWidth="9" 
                            styles={buildStyles({
                                // Colors
                                textColor: color,
                                pathColor: color,
                            })}
                            text={`${props.values}%`} 
                        />
                        <div className='days-txt'>{obj.name}</div>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
