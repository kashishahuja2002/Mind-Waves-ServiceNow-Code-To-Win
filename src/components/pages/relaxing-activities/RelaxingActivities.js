import React from "react";

import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { relaxingActivitiesList } from "../../Constants";
import '../../../styles/pages/RelaxingActivities.scss';

const ActivityCard = (obj) => {
    return (
        <Card className="activityCard whiteBox">
            <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image={obj.image}
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="title">
                    {obj.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="content">
                    {obj.content}
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small">
                    <Link href={obj.link} underline="none" target={(obj.key==="exercise" || obj.key==="meditation") ? "_self" : "_blank"} rel="noopener">Discover</Link>
                </Button>
            </CardActions>
        </Card>
    );
}

const RelaxingActivities = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={3}
        >
            {relaxingActivitiesList.map((obj, index) => (
                <Grid item key={index} xs={12} sm={6}>
                    {ActivityCard(obj)}    
                </Grid>
            ))}
        </Grid>
    );
}

export default RelaxingActivities;