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
import { useState } from 'react';

function createData(name, price, numOfBadges) {
    return { name, price, numOfBadges };
}

const rows = [
    createData("Drakshi", 5, 3),
    createData("kashish", 6, 2),
    createData("Ishika", 3, 1),
    createData("Ishika", 2, 1.6),
    createData("Ishika", 1, 4)
];

export default function SortedTable() {
    const [rowData, setRowData] = useState(rows);
    const [orderDirection, setOrderDirection] = useState("asc");

    const sortArray = (arr, orderBy) => {
        switch (orderBy) {
            case "asc":
            default:
                return arr.sort((a, b) =>
                    a.price > b.price ? 1 : b.price > a.price ? -1 : 0
                );
            case "desc":
                return arr.sort((a, b) =>
                    a.price < b.price ? 1 : b.price < a.price ? -1 : 0
                );
        }
    };

    const handleSortRequest = () => {
        setRowData(sortArray(rows, orderDirection));
        setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
    };

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Employee Name</TableCell>

                        <TableCell align="center" onClick={handleSortRequest}>
                            <TableSortLabel active={true} direction={orderDirection}>
                                Rank&nbsp;($)
                            </TableSortLabel>
                        </TableCell>

                        <TableCell align="center">No. of Badges</TableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowData.map((row) => (
                        <TableRow key={row.number}>
                            <TableCell component="th" scope="row" align="center">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.price}</TableCell>
                            <TableCell align="center">{row.numOfBadges}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
