import React, { Component } from 'react';

function CustomTextInput(props) {
    return (
        <div className="mt-4">
            <input ref={props.inputRef} />
        </div>
    );
}

class NewClass extends Component {
    constructor(props) {
        super(props);
        this.textInput = null;
    }

    focusTextInput = () => {
        if (this.textInput) this.textInput.focus();
    };

    componentDidMount() {
        this.focusTextInput();
        this.inputElement.classList.add("form-control");
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={el => this.textInput = el} />

                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
                <CustomTextInput
                    inputRef={el => this.inputElement = el}
                />
            </div>
        )
    }
}

export default NewClass;