import React, { Component } from 'react';

class MouseTracker extends Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    };

    render() {
        return (
            <div className="border border-dark p-2" style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                <h1>Move the mouse around!</h1>
                <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
            </div>
        );
    }
}

class NewClass extends Component {

    render() {
        return (
            <div>
                <MouseTracker/>
            </div>
        )
    }
}

export default NewClass;