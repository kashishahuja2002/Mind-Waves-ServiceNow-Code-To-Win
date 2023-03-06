import React, { useEffect, useState } from 'react';

import { Card } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import '../../../styles/pages/Leaderboard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getLeaderboardRanks } from '../../../redux/leaderboard/LeaderboardActions';

function createData(name, rank, numOfBadges) {
    return { name, rank, numOfBadges };
}

export default function SortedTable() {

    const dispatch = useDispatch();
    const user = useSelector((store) => store.profile.user);
    const ranks = useSelector((store) => store.leaderboard.ranks);

    const [companyName, setCompanyName] = useState('');

    useEffect(() => {
        dispatch(getLeaderboardRanks("user/leaderboard", {}));
        let cn =  user.email.split('@')[1];
        cn = cn.split('.')[0];
        cn = cn.charAt(0).toUpperCase() + cn.slice(1);
        setCompanyName(cn);
    }, [user]);

    const [rows, setRows] = useState([]);
    const [rowData, setRowData] = useState(rows);
    const [orderDirection, setOrderDirection] = useState("desc");

    useEffect(() => {
        let data = [];
        if(ranks.length > 0) {
            ranks.forEach((ele, index) => {
                data.push(createData(ele.name, index+1, ele.badgecount))
            });
        }
        setRows(data);
        handleSortRequest();
    }, [ranks])

    const sortArray = (arr, orderBy) => {
        switch (orderBy) {
            case "asc":
            default:
                return arr.sort((a, b) =>
                    b.rank < a.rank ? -1 : a.rank < b.rank ? 1 : 0
                );

            case "desc":
                return arr.sort((a, b) =>
                    b.rank > a.rank ? -1 : a.rank > b.rank ? 1 : 0
                );
        }
    };

    const handleSortRequest = () => {
        setRowData(sortArray(rows, orderDirection));
        setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
    };

    return (
        <div>
            <div className='leaderboard-title'>{companyName}</div>
            <Card id="leftCard" className="whiteBox waterCard">
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow className='bg-darkblue' >
                            <TableCell className='table-heading curved-bg-left' align="center">Employee Name</TableCell>

                            <TableCell className='table-heading' align="center" onClick={handleSortRequest}>
                                <TableSortLabel className='table-heading ' active={true} direction={orderDirection}>
                                    Rank
                                </TableSortLabel>
                            </TableCell>

                            <TableCell className='table-heading curved-bg-right' align="center">No. of Badges</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowData.map((row, index) => (
                            <TableRow key={index} className={row.name === user.name ? 'bg-blue' : ''}>

                                <TableCell className="curved-bg-left" component="th" scope="row" align="center">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.rank}</TableCell>
                                <TableCell className="curved-bg-right" align="center">{row.numOfBadges}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
}
