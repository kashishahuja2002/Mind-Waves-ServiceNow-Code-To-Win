import React from "react";

import { Grid, Typography, Box } from "@mui/material";

import Badge from '../../../assets/images/Badge.png';

const MonthlyAchivements = () => {
    return (
        <Box className="whiteBox monthlyAchivements">
            <Typography variant="body" gutterBottom className="title">January</Typography>

            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
            >
                <Grid item xs><img src={Badge} alt="Badge" width="100px" /></Grid>
                <Grid item xs><img src={Badge} alt="Badge" width="100px" /></Grid>
                <Grid item xs><img src={Badge} alt="Badge" width="100px" /></Grid>
                <Grid item xs><img src={Badge} alt="Badge" width="100px" /></Grid>
                <Grid item xs><img src={Badge} alt="Badge" width="100px" /></Grid>
                <Grid item xs><img src={Badge} alt="Badge" width="100px" /></Grid>
                <Grid item xs><img src={Badge} alt="Badge" width="100px" /></Grid>
            </Grid>
        </Box>
    );
}

export default MonthlyAchivements;