import React, {Component, createContext} from "react";

const ThemeContext = createContext('alert-dark');
const UserContext = createContext({
    name: 'Guest',
});

class ProfilePage extends Component {
    render() {
        const {theme, user} = this.props;
        return (
            <div className={'alert ' + theme}>
                {user}
            </div>
        );
    }
}

function Content() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <UserContext.Consumer>
                    {user => (
                        <ProfilePage user={user} theme={theme} />
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}

function Layout() {
    return (
        <div>
            <Content />
        </div>
    );
}

class NewClass extends Component {
    render() {
        const {signedInUser = 'Ihor', theme = 'alert-primary'} = this.props;

        return (
            <ThemeContext.Provider value={theme}>
                <UserContext.Provider value={signedInUser}>
                    <Layout />
                </UserContext.Provider>
            </ThemeContext.Provider>
        );
    }
}


export default NewClass;