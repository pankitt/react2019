import React, { Component, createContext } from 'react';

const ThemeContext = createContext("secondary");

function Button(props) {
    return <button className={'btn btn-' + props.theme}>Button</button>
}

function ThemedButton(props) {
    return (
        <ThemeContext.Consumer>
            {theme => <Button {...props} theme={theme} />}
        </ThemeContext.Consumer>
    );
}

function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

class NewClass extends Component {
    render() {
        return (
            <ThemeContext.Provider value="primary">
                <Toolbar />
            </ThemeContext.Provider>
        )
    }
}

export default NewClass;