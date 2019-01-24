import React, { Component, forwardRef, createRef } from "react";

const FancyButton = forwardRef((props, ref) => (
    <button ref={ref} className="btn btn-primary">
        {props.children}
    </button>
));

// You can now get a ref directly to the DOM button:
const myRef = createRef();
class NewClass extends Component {
    componentDidMount() {
        myRef.current.focus();
    }

    render() {
        return (
            <div>
                <FancyButton ref={myRef}>
                    Click
                </FancyButton>
            </div>
        )
    }
}

export default NewClass;