import React from 'react'

import { Box } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';

import '../../styles/common/CustomLoader.scss';

export default function CustomLoader() {
    return (
        <Box sx={{ display: 'flex' }} className='center-loader'>
            <CircularProgress />
        </Box>       
    )
}
