import React from "react";

import { Grid, Typography, Box } from "@mui/material";

import { badgesList } from '../../Constants';
import CustomTooltip from '../../common/CustomTooltip';

const MonthlyAchievements = (props) => {
    const { data } = props;
    
    return (
        <Box className="whiteBox monthlyAchievements">
            <Typography variant="body" gutterBottom className="title">{data.month}</Typography>

            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
            >
                {badgesList.map((obj, index) => 
                    <Grid item key={`badge-${index}`} xs>
                        <CustomTooltip title={`${obj.key} Goal: ${obj.goal}`}>
                            <img src={obj.badge} alt="Badge" width="130px" className={data[obj.key] ? "coloured" : "blackWhite"} />
                        </CustomTooltip>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}

export default MonthlyAchievements;