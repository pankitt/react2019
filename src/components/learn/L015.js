import React, {Component} from 'react';

function SpeedDetector(props) {
    if (props.speed >= props.maxSpeed) {
        return <div>Скорость превышена!</div>;
    }
    return <div>Скорость не превышена.</div>;
}


class className extends Component{
    constructor(props) {
        super(props);
        this.state = {speed: ''};
    }

    MAX_SPEED_COUNTRY = 60;

    onSpeedChange = (e) => {
        this.setState({speed: e.target.value});
    };

    render() {
        const speed = this.state.speed;
        return (
            <div>
                <div>Введите скорость в км/ч:</div>
                <input value={speed} onChange={this.onSpeedChange}/>
                <SpeedDetector speed={parseFloat(speed)} maxSpeed={this.MAX_SPEED_COUNTRY}/>
            </div>
        );
    }
}

export default className;
