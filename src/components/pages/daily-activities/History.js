import React from 'react'

import List from '@mui/material/List';
import { Divider } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlassWater, faDumbbell } from '@fortawesome/free-solid-svg-icons'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

export default function History(props) {
    const { time, tab } = props;

    return (
        time.length === 0
            ? <div className='alt-txt'>
                <AccessTimeFilledIcon />
                {`Your water ${tab} history will appear here`}
            </div>

            : time.map((item, index) =>
                <List key={`history-${index}`}>
                    <ListItemButton>
                        <ListItemIcon className={tab}>
                            {tab === "water" && <FontAwesomeIcon icon={faGlassWater} />}
                            {tab === "exercise" && <FontAwesomeIcon icon={faDumbbell} />}
                            {tab === "meditation" && <SelfImprovementIcon />}
                        </ListItemIcon>

                        {tab === "water" ? <ListItemText primary={item.split('::')[0]} /> : <ListItemText primary={item.split('::')[1]} />}
                        <ListItemIcon style={{ marginLeft: '10px' }}>
                            {tab === "water" ? "200ml" : item.split('::')[0]}
                        </ListItemIcon>
                    </ListItemButton>
                    <Divider />
                </List>
            )
    )
}
