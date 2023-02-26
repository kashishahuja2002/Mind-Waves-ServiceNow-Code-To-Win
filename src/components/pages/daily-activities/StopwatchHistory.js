import React from 'react';
import History from './History';

class StopwatchHistory extends React.Component {
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
                `${Date().toString()} :: ${this.props.formatTime(
                    this.props.currentTimeMin
                )}:${this.props.formatTime(
                    this.props.currentTimeSec
                )}:${this.props.formatTime(this.props.currentTimeMs, 'ms')}|` +
                localStorage.times;
        } else {
            localStorage.times = `${Date().toString()} :: ${this.props.formatTime(
                this.props.currentTimeMin
            )}:${this.props.formatTime(
                this.props.currentTimeSec
            )}:${this.props.formatTime(this.props.currentTimeMs, 'ms')}|`;
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
                {/*<div onClick={this.resetHistory} className="end-session-button">Reset History</div>*/}                <div onClick={this.saveTime}>
                    <div onClick={this.props.reset} className="end-session-button">End Session</div>
                </div>
                <ul>
                    {this.state.history.map((item, index) => <div key={index}>{item}</div>)}
                </ul>
            </div>
        );
    }
}

export default StopwatchHistory;
