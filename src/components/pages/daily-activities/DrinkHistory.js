import React from 'react'
import '../../../styles/pages/daily-activities/WaterTracker/WaterTracker.scss';
import { faGlassWater } from '@fortawesome/free-solid-svg-icons'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Divider } from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

export default function DrinkHistory(props) {
    console.log(props.time.length);
    return (
        <div>
            {props.time.length == 0 ? <div className='alt-txt'>
                <div clasName='alt-icon'>
                </div>
                <AccessTimeFilledIcon style={{
                    position: ' relative',
                    left: ' 45%',
                    paddingBottom: '10px'
                }} />
                Your water drinking history will appear here
            </div> : props.time.map((item, index) =>

                <div key={index}>
                    <List>
                        <ListItemButton>
                            <ListItemIcon style={{ color: "rgb(62, 152, 199)" }}>
                                <FontAwesomeIcon icon={faGlassWater} />
                            </ListItemIcon>

                            <ListItemText primary={item} />
                            <ListItemIcon style={{ marginLeft: '10%' }}>
                                100ml
                            </ListItemIcon>
                        </ListItemButton>
                        <Divider />
                    </List>
                </div>
            )}

        </div>
    )
}
