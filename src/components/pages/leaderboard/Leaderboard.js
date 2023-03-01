import React from 'react';
import '../../../styles/pages/leaderboard.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card } from '@mui/material';
import TableSortLabel from '@mui/material/TableSortLabel';
import { useState, useEffect } from 'react';

export default function Leaderboard() {
    function createData(name, rank, numOfBadges) {
        return { name, rank, numOfBadges };
    }


    const rows = [
        createData('Drakshi Chopra', 1, 5),
        createData('Ishika Paliwal', 3, 6),
        createData('Kashish Ahuja', 2, 3),
        createData('Drakshi Chopra', 4, 5),
        createData('Drakshi Chopra', 5, 5),

    ];

    return (
        <div>
            <div className='leaderboard-title'>Company Name</div>
            <Card id="leftCard" className="whiteBox waterCard">
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='table-heading'>Employee Name</TableCell>
                            <TableCell className='table-heading' align="right">
                                <TableSortLabel active={true} direction="asc">
                                    Rank
                                </TableSortLabel>
                            </TableCell>
                            <TableCell className='table-heading' align="right">No. of badges</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.rank}</TableCell>
                                <TableCell align="right">{row.numOfBadges}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    )
}
