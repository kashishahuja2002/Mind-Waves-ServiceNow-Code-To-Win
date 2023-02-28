import React from 'react';
import History from './History';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import '../../../styles/pages/daily-activities/Excersize/stopwatch.scss';
import { Divider } from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

class StopwatchHistory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            history: [],
            data: []
        };
    }

    componentDidMount() {
        this.setHistoryState();
    }
    setHistoryState = () => {
        if (localStorage.times) {

            this.setState({
                history: localStorage.times.split('|'),
                data: localStorage.times.split('|').slice(0, 4)
            });
        }
        else {
            this.setState({ history: [], data: [] });
        }
    };
    saveToLocalStorage = () => {
        this.setHistoryState();
        if (localStorage.times) {
            localStorage.times =

                `${this.props.formatTime(
                    this.props.currentTimeMin
                )}:${this.props.formatTime(
                    this.props.currentTimeSec
                )} ::   ${new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })} | ` +
                localStorage.times

        } else {
            localStorage.times = `${this.props.formatTime(
                this.props.currentTimeMin
            )}:${this.props.formatTime(
                this.props.currentTimeSec
            )} ::   ${new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })} | `;
        }
    };

    saveTime = () => {
        if (typeof Storage !== 'undefined') {
            this.saveToLocalStorage();
        } else {
            console.error('local storage not supported');
        }
        this.setHistoryState();


    };

    resetHistory = () => {
        if (localStorage.times) {
            localStorage.removeItem('times');
        }
        this.setHistoryState();
    };
    reset = () => {

        this.setState({
            currentTimeMs: 0,
            currentTimeSec: 0,
            currentTimeMin: 0,
            running: false,
        }, () => {
            this.setHistoryState();
        });
        clearInterval(this.watch);
        if (typeof Storage !== 'undefined') {
            this.saveToLocalStorage();
        } else {
            console.error('local storage not supported');
        }
        this.setHistoryState();
    };

    render() {
        return (
            <div className={'stopwatch__history'}>
                {/*<div onClick={this.resetHistory} className="end-session-button">Reset History</div>*/}
                {/*<div onClick={this.saveTime}>
                    <div onClick={this.props.reset} className="end-session-button">End Session</div>
        </div>*/}
                {this.state.data.length == 0 && console.log("blah")}
                <ul>

                    {this.state.data.length == 0 ? <div className='alt-txt'>
                        <div clasName='alt-icon'>
                        </div>
                        <AccessTimeFilledIcon />
                        Your history will appear here
                    </div> : this.state.data.map((item, index) => <div key={index}>
                        <List>
                            <ListItemButton>
                                <ListItemIcon>
                                    {this.state.data.length != 0 && <DirectionsRunIcon />}
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItemButton>
                            <Divider />
                        </List>
                    </div>)}
                </ul>
            </div>
        );
    }
}

export default StopwatchHistory;
