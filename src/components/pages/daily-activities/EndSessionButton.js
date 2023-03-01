import React from 'react';
import History from './History';

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
        this.setHistoryState();

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
        let msg = 'Goodbye';
        return (
            <div onClick={this.saveTime}>
                <div onClick={this.props.reset} className="endSessionButton" >
                    End Session
                </div>
            </div>
        );
    }
}

export default EndSessionButton;
