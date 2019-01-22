import React, { Component } from 'react';

class OuterClickExample extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.timeOutId = null;
    }

    onClickHandler = () => {
        this.setState(currentState => ({
            isOpen: !currentState.isOpen
        }));
    };
    onBlurHandler = () => {
        this.timeOutId = setTimeout(() => {
            this.setState({
                isOpen: false
            });
        });
    };
    onFocusHandler = () => {
        clearTimeout(this.timeOutId);
    };

    render() {
        return (
            <div className="open-menu" onBlur={this.onBlurHandler} onFocus={this.onFocusHandler}>
                <button onClick={this.onClickHandler}>
                    Select an option
                </button>
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