import React, { Component, createRef } from 'react';

function CustomTextInputOut(props) {
    return (
        <div>
            <input ref={props.inputRef} />
        </div>
    );
}


class CustomTextInput extends Component {
    constructor(props) {
        super(props);
        this.textInput = createRef();
        this.inputElement = createRef();
    }
    componentDidMount() {
        // this.textInput.current.focus();
        this.inputElement.current.focus();
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput}
                />
                <CustomTextInputOut inputRef={this.inputElement} />
            </div>
        );
    }
}

class NewClass extends Component {
    render() {
        return (
            <CustomTextInput />
        )
    }
}

export default NewClass;