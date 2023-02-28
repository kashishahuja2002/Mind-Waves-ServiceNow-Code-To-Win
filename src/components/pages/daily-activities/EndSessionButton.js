import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import "../../../styles/pages/daily-activities/Excersize/stopwatch.scss";


class EndSessionButton extends React.Component {
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
                data: localStorage.times.split('|').slice(0, 3)
            });
        }
        else {
            this.setState({ history: [], data: [] });
        }
    };
    saveToLocalStorage = () => {
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
                    <div onClick={this.props.reset} className={'end-session-button ' + this.props.class} >End Session</div>
                </div>
            </div>
        );
    }
}

export default EndSessionButton;
