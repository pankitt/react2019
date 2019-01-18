import React, { Component } from 'react';

function Alert(props) {
    return (
        <div className={'alert alert-' + props.color}>
            {props.children}
        </div>
    );
}

function Dialog(props) {
    return (
        <Alert color="dark">
            <h4 className="Dialog-title">
                {props.title}
            </h4>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </Alert>
    );
}


class className extends Component {
    constructor(props) {
        super(props);
        this.state = {login: ''};
    }

    handleChange = (e) => {
        this.setState({login: e.target.value});
    };
    handleSignUp = () => {
        console.log(`Welcome aboard, ${this.state.login}!`);
    };

    render() {
        return (
            <Dialog title="Mars Exploration Program"
                    message="How should we refer to you?">
                <div className="input-group">
                    <input className="form-control"
                           value={this.state.login}
                           onChange={this.handleChange} />

                    <div className="input-group-prepend">
                        <button className="input-group-text" onClick={this.handleSignUp}>Sign Me Up!</button>
                    </div>
                </div>
            </Dialog>
        )
    }
}

export default className;