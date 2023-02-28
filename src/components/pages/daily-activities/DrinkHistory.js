import React from 'react'

import List from '@mui/material/List';
import { Divider } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { faGlassWater } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

export default function DrinkHistory(props) {
    return (
        props.time.length == 0 
            ?   <div className='alt-txt'>
                    <AccessTimeFilledIcon />
                    Your water drinking history will appear here
                </div> 
            
            :   props.time.map((item, index) =>
                    <List key={index}>
                        <ListItemButton>
                            <ListItemIcon style={{ color: "rgb(62, 152, 199)" }}>
                                <FontAwesomeIcon icon={faGlassWater} />
                            </ListItemIcon>

                            <ListItemText primary={item} />
                            <ListItemIcon style={{ marginLeft: '10px' }}>
                                200ml
                            </ListItemIcon>
                        </ListItemButton>
                        <Divider />
                    </List>
                )
    )
}
