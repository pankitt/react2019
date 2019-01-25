import React, { Component, createRef } from 'react';

class NewClass extends Component {
    constructor(props) {
        super(props);
        this.myRef = createRef();
        this.textInput = createRef();
    }

    focusTextInput = () => {
        this.textInput.current.focus();
    };

    componentDidMount() {
        const node = this.myRef.current;
        node.classList.add("alert-success");
    }

    render() {
        return (
            <div>
                <div className="alert" ref={this.myRef}>ref</div>
                <input
                    type="text"
                    ref={this.textInput} />

                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        )
    }
}

export default NewClass;