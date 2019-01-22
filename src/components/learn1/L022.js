import React, { Component } from 'react';

function Dialog(props) {
    return (
        <div className="alert alert-alert alert-dark">
            <h5 className="Dialog-title">
                {props.title}
            </h5>
            <p className="Dialog-message">
                {props.message}
            </p>
        </div>
    );
}


class NewClass extends Component {
    render() {
        return (
            <Dialog
                title="Welcome"
                message="Thank you for visiting our spacecraft!" />
        )
    }
}

export default NewClass;