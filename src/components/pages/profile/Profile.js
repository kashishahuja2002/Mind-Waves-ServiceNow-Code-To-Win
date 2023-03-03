import React from "react";

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
                alignItems="flex-start"
                className="personalInfo"
                spacing={2}
            >
                <Grid item xs={12} sm={7} md={9} sx={{paddingTop: "0px !important"}}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        className="personalInfo"
                        spacing={2}
                    >
                        <Grid item xs={12} md={6}>
                            <TextField id="outlined-basic" label="First Name" variant="outlined" disabled />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="outlined-basic" label="Last Name" variant="outlined" disabled />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="outlined-basic" type="email" label="Email" variant="outlined" disabled />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={5} md={3} sx={{display: {xs: "none", sm: "block"}}} textAlign="center">
                    <img src="https://lh3.googleusercontent.com/a/AGNmyxZDRLQ8jF_OnmlEQlgtZDug2wdP_-4XiH-6Cn60YWo=s96-c" alt="user profile" referrerpolicy="no-referrer" width="150px" className="picture" />
                </Grid>
            </Grid>

            <Typography variant="body" gutterBottom className="title">Goal Information</Typography>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                className="personalInfo"
                spacing={2}
            >
                <Grid item xs={12} sm={7} md={4.5}>
                    <TextField id="outlined-basic" type="number" label="Hydration Goal (Number of glasses)" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={7} md={4.5}>
                    <TextField id="outlined-basic" type="number" label="Exercise Goal (in Minutes)" variant="outlined" />
                </Grid>
                <Grid item md={3} sx={{display: {xs: "none", md: "block"}}}></Grid>
                <Grid item xs={12} sm={7} md={4.5}>
                    <TextField id="outlined-basic" type="number" label="Meditation Goal (in Minutes)" variant="outlined" />
                </Grid>
            </Grid>
        </div>
    );
}

export default Profile;