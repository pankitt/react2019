import React, { Component } from 'react'

function SetFireMessage() {
    return <h5>Камин горит!</h5>;
}

function SnuffOutMessage() {
    return <h5>Камин не горит</h5>;
}

function Indicator(props) {
    const isBurning = props.isBurning;

    return isBurning ? <SetFireMessage /> : <SnuffOutMessage />
}

function SetFireButton(props) {
    return (<button className="btn btn-primary" onClick={props.onClick}>Зажечь</button>);
}

function SnuffOutButton(props) {
    return (<button className="btn btn-warning" onClick={props.onClick}>Потушить</button>);
}

class NewClass extends Component {
    constructor(props) {
        super(props);
        this.state = {isBurning: false};
    }

    onSetFire = () => {
        this.setState({isBurning: true});
    };

    onSnuffOut = () => {
        this.setState({isBurning: false});
    };

    render() {
        const isBurning = this.state.isBurning;
        let button = null;
        isBurning ? button = <SnuffOutButton onClick={this.onSnuffOut} /> : button = <SetFireButton onClick={this.onSetFire} />;

        return (
            <div>
                <Indicator isBurning={isBurning} />
                {button}
            </div>
        );
    }
}

export default NewClass;