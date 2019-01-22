import React, { Component } from 'react';

function Button(props) {
    return <button className={'btn btn-' + props.theme}>Button</button>
}

function ThemedButton(props) {
    return <Button theme={props.theme} />;
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton theme={props.theme} />
        </div>
    );
}

class NewClass extends Component {
    render() {
        return (
            <div>
                <Toolbar theme="primary" />
            </div>
        )
    }
}

export default NewClass;