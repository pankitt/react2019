import React, { Component } from 'react';
import {ThemeContext} from './theme-context';

class ThemeTogglerButton extends Component{
    render() {
        return (
            <ThemeContext.Consumer>
                {({theme, toggleTheme}) => (
                    <button
                        onClick={toggleTheme}
                        style={{backgroundColor: theme.background, color: theme.color}}
                        className="btn">
                        Toggle Theme
                    </button>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default ThemeTogglerButton;