import React from "react";
import { useSelector } from "react-redux";

import { Grid } from "@mui/material";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import '../../../styles/pages/Profile.scss';

const Profile = () => {
    return (
        <div className="profile whiteBox">
            <Typography variant="body" gutterBottom className="title">Personal Information</Typography>
            
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                className="personalInfo"
                spacing={2}
            >
                <Grid item xs={12} sm={6} md={4}>
                    <TextField id="outlined-basic" label="First Name" variant="outlined" disabled />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" disabled />
                </Grid>

                <Grid item md={4} sx={{display: {xs: "none", md: "block"}}}></Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <TextField id="outlined-basic" type="email" label="Email" variant="outlined" disabled />
                </Grid>
            </Grid>

            <Typography variant="body" gutterBottom className="title">Goal Information</Typography>

            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
            >
                <Grid item xs={12} sm={6} md={4}>
                    <TextField id="outlined-basic" type="number" label="Hydration Goal (Number of glasses)" variant="outlined" />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <TextField id="outlined-basic" type="number" label="Exercise Goal (in Minutes)" variant="outlined" />
                </Grid>

                <Grid item md={4} sx={{display: {xs: "none", md: "block"}}}></Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <TextField id="outlined-basic" type="number" label="Meditation Goal (in Minutes)" variant="outlined" />
                </Grid>
            </Grid>
        </div>
    );
}

export default Profile;