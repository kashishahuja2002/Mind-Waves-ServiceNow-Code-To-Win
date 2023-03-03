import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import IconButton from '@mui/material/IconButton';

import EndSessionButton from './EndSessionButton.js';
import StopwatchHistory from './StopwatchHistory.js';
import TargetChart from './TragetChart';

import '../../../styles/pages/daily-activities/MeditationTracker.scss';


class MeditationTracker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            running: false,
            currentTimeMs: 0,
            currentTimeSec: 0,
            currentTimeMin: 0,
            history: [],
            historyCardHeight: 0,
            countKey: 0
        };
    }

    componentDidMount() {
        this.setHistoryState();
        let leftCard = document.querySelector("#leftCard");
        if(leftCard) {
            this.setState({
                historyCardHeight: leftCard.clientHeight - 25
            })
        }
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
        // if (typeof Storage !== 'undefined') {
        //     this.saveToLocalStorage();
        // } else {
        //     console.error('local storage not supported');
        // }
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
        let newKey = this.state.countKey + 1;
        this.setState({
            currentTimeMs: 0,
            currentTimeSec: 0,
            currentTimeMin: 0,
            running: false,
            countKey: newKey,
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
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={3}
            >
                <Grid item xs={12} sm={6}>
                    <Card id="leftCard" className="whiteBox meditationCard">
                        <CountdownCircleTimer
                            key={this.state.countKey}
                            isPlaying={this.state.running}
                            duration={60}
                            colors="#d9d9d9"
                            trailColor='#51ab55'
                            strokeWidth="12"
                            size={140}
                            onComplete={() => {
                                return { delay: 0 }
                            }}
                        >
                            {({ remainingTime }) => this.state.running === false 
                                ?   <IconButton><PlayArrowOutlinedIcon className="play-icon" onClick={this.start} /></IconButton> 
                                :   <IconButton><PauseOutlinedIcon className="play-icon" onClick={this.stop} /></IconButton>
                            }
                        </CountdownCircleTimer>

                        <div className="stopwatch">
                            {this.formatTime(this.state.currentTimeMin)}:
                            {this.formatTime(this.state.currentTimeSec)}
                        </div>

                        <EndSessionButton 
                            reset={this.reset} {...this.state} formatTime={this.formatTime} 
                        />
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Card className="whiteBox historyCard" sx={{height: this.state.historyCardHeight}}>
                        {/* History component */}
                        <StopwatchHistory reset={this.reset} {...this.state} formatTime={this.formatTime} />
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card className="whiteBox targetCard">
                        <TargetChart color="#51ab55" values={80} />
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default MeditationTracker;
