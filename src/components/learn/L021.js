import React, { Component } from 'react';

function Alert(props) {
    return (
        <div className={'alert alert-' + props.color}>
            {props.children}
        </div>
    );
}


class className extends Component {
    render() {

        return (
            <Alert color="dark">
                <h5 className="Dialog-title">
                    Welcome
                </h5>
                <p className="Dialog-message">
                    Thank you for visiting our spacecraft!
                </p>
            </Alert>
        )
    }
}

export default className;