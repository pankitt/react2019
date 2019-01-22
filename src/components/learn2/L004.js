import React, { Component, createRef } from 'react';

class OuterClickExample extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.toggleContainer = createRef();
    }

    componentDidMount() {
        window.addEventListener('click', this.onClickOutsideHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onClickOutsideHandler);
    }

    onClickHandler = () => {
        this.setState(currentState => ({
            isOpen: !currentState.isOpen
        }));
    };

    onClickOutsideHandler = (event) => {
        if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
            this.setState({ isOpen: false });
        }
    };

    render() {
        return (
            <div className="open-menu" ref={this.toggleContainer}>
                <button onClick={this.onClickHandler}>Select an option</button>
                {this.state.isOpen ? (
                    <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                ) : null}
            </div>
        );
    }
}

class NewClass extends Component {
    render() {
        return (
            <div>
                <OuterClickExample />
                <OuterClickExample />
                <OuterClickExample />
                <OuterClickExample />
            </div>
        )
    }
}

export default NewClass;