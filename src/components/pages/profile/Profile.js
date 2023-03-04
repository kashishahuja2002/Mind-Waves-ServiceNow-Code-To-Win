import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Grid, Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { getProfile } from "../../../redux/profile/ProfileActions";

import '../../../styles/pages/Profile.scss';

const Profile = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.profile.user);

    useEffect(()=>{
        dispatch(getProfile("user/getinfo", {}))
    }, []);

    const handleCancelClick = () => {
        navigate('/pages/dashboard')
    }

    const [goals, setGoals] = useState({waterGoal: '', exerciseGoal: '', meditationGoal: ''});
    useEffect(() => {
        setGoals((prev) => ({
            ...prev,
            waterGoal: user.waterGoal,
            exerciseGoal: user.exerciseGoal,
            meditationGoal: user.meditationGoal
        }))
    }, [user]);

    const handleGoalChange = (e, task) => {
        setGoals((prev) => ({
            ...prev,
            [task]: e.target.value
        }))
    }

    const handleSaveClick = () => {
        // API
        console.log(goals);
    }
    
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
                            <TextField id="outlined-basic" label="First Name" variant="outlined" value={user?.name?.split(' ')[0]} disabled />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="outlined-basic" label="Last Name" variant="outlined" value={user?.name?.split(' ')[1]} disabled />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="outlined-basic" type="email" label="Email" variant="outlined" value={user.email} disabled />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={5} md={3} sx={{display: {xs: "none", sm: "block"}}} textAlign="center">
                    <img src={user.picture} alt="user profile" referrerPolicy="no-referrer" width="150px" className="picture" />
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
                    <TextField id="outlined-basic" type="number" label="Hydration Goal (Number of glasses)" variant="outlined" value={goals.waterGoal} onChange={(e) => handleGoalChange(e, "waterGoal")} />
                </Grid>
                <Grid item xs={12} sm={7} md={4.5}>
                    <TextField id="outlined-basic" type="number" label="Exercise Goal (in Minutes)" variant="outlined" value={goals.exerciseGoal} onChange={(e) => handleGoalChange(e, "exerciseGoal")} />
                </Grid>
                <Grid item md={3} sx={{display: {xs: "none", md: "block"}}}></Grid>
                <Grid item xs={12} sm={7} md={4.5}>
                    <TextField id="outlined-basic" type="number" label="Meditation Goal (in Minutes)" variant="outlined" value={goals.meditationGoal} onChange={(e) => handleGoalChange(e, "meditationGoal")} />
                </Grid>
            </Grid>

            <Box className="buttonBox">
                <Button variant="outlined" onClick={handleCancelClick}>Cancel</Button>
                <Button variant="contained" onClick={handleSaveClick}>Save</Button>
            </Box>

        </div>
    );
}

export default Profile;
//value={user.name.split(' ')[1]}