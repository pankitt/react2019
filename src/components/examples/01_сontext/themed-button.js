import React, { Component } from 'react';
import { ThemeContext } from './theme-context';

// variant 1 - ENG DOC
/*class ThemedButton extends Component {
    render() {
        let props = this.props;
        let theme = this.context;
        return (
            <button
                {...props}
                style={{backgroundColor: theme.background, color: theme.color}}
                className="btn"
            />
        );
    }
}

ThemedButton.contextType = ThemeContext;*/

// variant 2 - function
/*function ThemedButton(props) {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <button
                    {...props}
                    style={{backgroundColor: theme.background, color: theme.color}}
                    className="btn"
                />
            )}
        </ThemeContext.Consumer>
    );
}*/

// variant 3 - class
class ThemedButton extends Component {
    render() {
        let props = this.props;
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <button
                        {...props}
                        style={{backgroundColor: theme.background, color: theme.color}}
                        className="btn"
                    />
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default ThemedButton;