import React, { Component } from 'react';

class NewClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            temperature: 0
        };

        //this.handleClick = this.handleClick.bind(this);
        //this.onIncrease = this.onIncrease.bind(this);
        //this.onDecrease = this.onDecrease.bind(this);
        //this.onClick = this.onClick.bind(this);
    }

    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    };

    onIncrease = () => {
        this.setState(state => ({
            temperature: state.temperature + 1
        }))
    };

    onDecrease = () => {
        this.setState(state => ({
            temperature: state.temperature - 1
        }))
    };

    onClick = e => {
        e.preventDefault();
        this.setState({temperature: 0});
    };

    render() {
        const {isToggleOn, temperature} = this.state;

        return (
            <div>
                <button className="btn btn-primary mr-2" onClick={this.handleClick}>
                    {isToggleOn ? 'ON' : 'OFF'}
                </button>
                <a href="https://www.google.com.ua/" className="btn btn-success" onClick={this.onClick}>Обнулить температуру</a>
                <div>
                    <h4>Текущая температура: {temperature}</h4>
                    <button className="btn btn-primary mr-2" onClick={this.onDecrease}>-</button>
                    <button className="btn btn-warning" onClick={this.onIncrease}>+</button>
                </div>
            </div>
        );
    }
}

export default NewClass;