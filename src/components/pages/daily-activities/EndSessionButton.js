import React from 'react';
import History from './History';
import StopwatchHistory from './StopwatchHistory';
import { Grid } from '@mui/material';
import 'react-circular-progressbar/dist/styles.css';
import Card from '@mui/material/Card';


class EndSessionButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            history: [],
        };
    }

    componentDidMount() {
        this.setHistoryState();
    }

    setHistoryState = () => {
        if (localStorage.times) {
            this.setState({ history: localStorage.times.split('|') });
        } else {
            this.setState({ history: [] });
        }
    };
    saveToLocalStorage = () => {
        if (localStorage.times) {
            localStorage.times =
                `${new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })} ::
                 ${this.props.formatTime(
                    this.props.currentTimeMin
                )}:${this.props.formatTime(
                    this.props.currentTimeSec
                )}|` +
                localStorage.times;
        } else {
            localStorage.times = `${new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })} :: ${this.props.formatTime(
                this.props.currentTimeMin
            )}:${this.props.formatTime(
                this.props.currentTimeSec
            )}|`;
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
                <div onClick={this.saveTime}>
                    <div onClick={this.props.reset} className="end-session-button">End Session</div>
                </div>
            </div>
        );
    }
}

export default EndSessionButton;
