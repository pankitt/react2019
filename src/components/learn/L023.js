import React, { Component } from 'react';

function Title() {
    return <h5 className="Dialog-title">
        Welcome
    </h5>
}
function Info() {
    return <p className="Dialog-message">
        Thank you for visiting our spacecraft!
    </p>
}

function Alert(props) {
    return (
        <div className={'alert alert-' + props.color}>
            {props.top}
            {props.bot}
        </div>
    );
}


class NewClass extends Component {
    render() {
        return (
            <Alert color="dark"
                top = {
                <Title>{this.props.children}</Title>
                }
                bot = {
                <Info>{this.props.children}</Info>
                }
            />
        )
    }
}

export default NewClass;