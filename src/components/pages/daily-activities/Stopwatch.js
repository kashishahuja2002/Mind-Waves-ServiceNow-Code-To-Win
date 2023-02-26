import React from 'react';
import ReactDOM from 'react-dom';
import StopwatchDisplay from './StopwatchDisplay.js';
import StopwatchHistory from './StopwatchHistory.js';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import '../../../styles/pages/daily-activities/Excersize/stopwatch.scss';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';


class Stopwatch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            running: false,
            currentTimeMs: 0,
            currentTimeSec: 0,
            currentTimeMin: 0,
            history: [],
            remainingTime: 0,
        };
    }


    formatTime = (val, ...rest) => {
        let value = val.toString();
        if (value.length < 2) {
            value = '0' + value;
        }
        if (rest[0] === 'ms' && value.length < 3) {
            value = '0' + value;
        }
        return value;
    };

    start = () => {
        if (!this.state.running) {
            this.setState({ running: true });
            this.watch = setInterval(() => this.pace(), 10);
        }
    };

    stop = () => {
        this.setState({ running: false });
        clearInterval(this.watch);
        if (typeof Storage !== 'undefined') {
            this.saveToLocalStorage();
        } else {
            console.error('local storage not supported');
        }
        this.setHistoryState();
    };

    pace = () => {
        this.setState({ currentTimeMs: this.state.currentTimeMs + 10 });
        if (this.state.currentTimeMs >= 1000) {
            this.setState({ currentTimeSec: this.state.currentTimeSec + 1 });
            this.setState({ currentTimeMs: 0 });
        }
        if (this.state.currentTimeSec >= 60) {
            this.setState({ currentTimeMin: this.state.currentTimeMin + 1 });
            this.setState({ currentTimeSec: 0 });
        }
    };

    reset = () => {
        this.setState({
            currentTimeMs: 0,
            currentTimeSec: 0,
            currentTimeMin: 0,
            running: false,
            remainingTime: 0
        });
        clearInterval(this.watch);
        if (typeof Storage !== 'undefined') {
            this.saveToLocalStorage();
        } else {
            console.error('local storage not supported');
        }
        this.setHistoryState();

    };
    saveToLocalStorage = () => {
        if (localStorage.times) {
            localStorage.times =
                `${Date().toString()} :: ${this.formatTime(
                    this.currentTimeMin
                )}:${this.formatTime(
                    this.currentTimeSec
                )}:${this.formatTime(this.currentTimeMs, 'ms')}|` +
                localStorage.times;
        } else {
            localStorage.times = `${Date().toString()} :: ${this.formatTime(
                this.currentTimeMin
            )}:${this.formatTime(
                this.currentTimeSec
            )}:${this.formatTime(this.currentTimeMs, 'ms')}|`;
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
    render() {
        return (
            <div className={'stopwatch'}>
                <div className='time-stamp'>
                    <CountdownCircleTimer
                        className="circleTimer"
                        isPlaying={this.state.running}
                        duration={21}
                        colors="#d9d9d9"
                        trailColor='#652fa1'
                        strokeWidth="12"
                        size={140}
                        remainingTime={this.state.remainingTime}
                        onComplete={() => {
                            return { shouldRepeat: true, delay: 0 }
                        }}
                    >
                        {({ remainingTime }) => this.state.running == false ? <PlayArrowOutlinedIcon className='play-icon' onClick={this.start} /> : <PauseOutlinedIcon className='play-icon' onClick={this.stop} />}

                    </CountdownCircleTimer>

                    <StopwatchDisplay currentTimeMin={this.state.currentTimeMin} currentTimeSec={this.state.currentTimeSec} formatTime={this.formatTime} />
                    <StopwatchHistory reset={this.reset} {...this.state} formatTime={this.formatTime} />
                </div>
            </div>
        );
    }
}

export default Stopwatch;
