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
import '../../../styles/pages/daily-activities/WaterTracker/WaterTracker.scss';
import { Grid } from '@mui/material';
import 'react-circular-progressbar/dist/styles.css';
import Card from '@mui/material/Card';
import TargetChart from './TragetChart';
import EndSessionButton from './EndSessionButton.js';

class Exercise extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            running: false,
            currentTimeMs: 0,
            currentTimeSec: 0,
            currentTimeMin: 0,
            history: [],
            key: 0,
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
        this.setHistoryState();
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
            <div>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                    <Grid item xs display="flex"
                        justifyContent="center"
                    >
                        <Grid item xs
                        >
                            <div className='waterTracker-card' ></div>
                            <Card className="waterCard">
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
                                            key={this.state.key}
                                            onComplete={() => {
                                                this.setState()
                                                return { shouldRepeat: true, delay: 0 }
                                            }}
                                        >
                                            {({ remainingTime }) => this.state.running == false ? <PlayArrowOutlinedIcon className='play-icon' onClick={this.start} /> : <PauseOutlinedIcon className='play-icon' onClick={this.stop} />}

                                        </CountdownCircleTimer>

                                        <StopwatchDisplay currentTimeMin={this.state.currentTimeMin} currentTimeSec={this.state.currentTimeSec} formatTime={this.formatTime} />
                                        <EndSessionButton reset={this.reset} {...this.state} formatTime={this.formatTime} />
                                    </div>
                                </div>
                            </Card>
                        </Grid>

                    </Grid>

                    <Grid item xs
                    >
                        <div className='waterTracker-card'></div>
                        <Card className="waterCard">
                            <StopwatchHistory reset={this.reset} {...this.state} formatTime={this.formatTime} />
                        </Card>
                    </Grid>
                    <Grid xs={12} className="target-chart-grid">
                        <div className='waterTracker-card'></div>
                        <Card className="waterCard">
                            <TargetChart color="#652fa1" values={80} />
                        </Card>
                    </Grid>
                </Grid>
            </div>

        );
    }
}

export default Exercise;
