import React, { Component, forwardRef } from "react";

function logProps(WrappedComponent) {
    class LogProps extends Component {
        componentDidUpdate(prevProps) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }

        render() {
            const {forwardedRef, ...rest} = this.props;

            // Assign the custom prop "forwardedRef" as a ref
            return <WrappedComponent ref={forwardedRef} {...rest} />;
        }
    }

    // Note the second param "ref" provided by React.forwardRef.
    // We can pass it along to LogProps as a regular prop, e.g. "forwardedRef"
    // And it can then be attached to the Component.
    return forwardRef((props, ref) => <LogProps {...props} forwardedRef={ref} />);
}

class NewClass extends Component {
    render() {
        return (
            <div>
                {logProps}
            </div>
        )
    }
}

export default NewClass;