import React, { Component } from 'react';

class Cat extends Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img
                alt="cat"
                src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Kitty_emoji.png"
                style={{ position: 'absolute', left: mouse.x, top: mouse.y, width: '30px' }}
            />
        );
    }
}

class MouseWithCat extends Component {
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
            <div className="border border-dark p-2" style={{ height: '100px' }} onMouseMove={this.handleMouseMove}>
                <Cat mouse={this.state} />
            </div>
        );
    }
}

class NewClass extends Component {

    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <MouseWithCat />
            </div>
        )
    }
}

export default NewClass;