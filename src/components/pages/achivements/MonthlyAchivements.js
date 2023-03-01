import React from "react";

import { Grid, Typography, Box } from "@mui/material";

import { badgesList } from '../../Constants';

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
                {badgesList.map((obj, index) => 
                    <Grid item key={`badge-${index}`} xs>
                        <img src={obj.badge} alt="Badge" width="130px" />
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}

export default MonthlyAchivements;