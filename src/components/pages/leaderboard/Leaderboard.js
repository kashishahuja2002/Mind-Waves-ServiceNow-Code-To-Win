import React, { useEffect } from 'react';
import '../../../styles/pages/leaderboard.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Card } from '@mui/material';
import TableSortLabel from '@mui/material/TableSortLabel';
import { useState } from 'react';

function createData(name, rank, numOfBadges) {
    return { name, rank, numOfBadges };
}

const rows = [
    createData("Drakshi", 4, 3),
    createData("kashish", 5, 2),
    createData("Ishika", 3, 1),
    createData("Ishika", 2, 1),
    createData("Ishika", 1, 1)
];

export default function SortedTable() {
    const [rowData, setRowData] = useState(rows);
    const [orderDirection, setOrderDirection] = useState("asc");

    useEffect(() => {
        handleSortRequest();
    }, [])
    const sortArray = (arr, orderBy) => {
        switch (orderBy) {
            case "asc":
            default:
                return arr.sort((a, b) =>
                    a.rank > b.rank ? 1 : b.rank > a.rank ? -1 : 0
                );
            case "desc":
                return arr.sort((a, b) =>
                    a.rank < b.rank ? 1 : b.rank < a.rank ? -1 : 0
                );
        }
    };

    const handleSortRequest = () => {
        setRowData(sortArray(rows, orderDirection));
        setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
    };

    return (
        <div>
            <div className='leaderboard-title'>Company Name</div>
            <Card id="leftCard" className="whiteBox waterCard">
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='table-heading' align="center">Employee Name</TableCell>

                            <TableCell className='table-heading' align="center" onClick={handleSortRequest}>
                                <TableSortLabel active={true} direction={orderDirection}>
                                    Rank&nbsp;($)
                                </TableSortLabel>
                            </TableCell>

                            <TableCell className='table-heading' align="center">No. of Badges</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowData.map((row) => (
                            <TableRow key={row.number}>
                                <TableCell component="th" scope="row" align="center">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.rank}</TableCell>
                                <TableCell align="center">{row.numOfBadges}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
}
