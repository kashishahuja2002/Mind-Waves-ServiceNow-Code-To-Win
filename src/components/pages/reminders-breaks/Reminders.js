import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';
import { useState } from 'react';
import '../../../styles/common/style.scss'

export default function Reminders() {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div>
            <Box sx={{ display: 'flex' }} className='center-loader'>
                <CircularProgress />
            </Box>
        </div>
    )
}
