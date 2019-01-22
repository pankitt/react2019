import React, { Component } from 'react';

function BackButton(props) {
    return (
        <button className={'btn btn-info'}>{props.children}</button>
    );
}

function NavButton(props) {
    return (
        <button className={'btn btn-light mr-2'}>{props.children}</button>
    );
}

function NavButtons(props) {
    return (
        <div className={'mt-2'}>{props.children}</div>
    );
}

function NavBar(props) {
    return (
        <div className="nav-bar">
            <div className="nav-bar__back-button-wrapper">{props.backButton}</div>
            <div className="nav-bar__nav-buttons-wrapper">{props.navButtons}</div>
        </div>
    );
}


class NewClass extends Component {
    render() {
        let navButtons = (
            <NavButtons>
                <NavButton>Один</NavButton>
                <NavButton>Два</NavButton>
                <NavButton>Три</NavButton>
            </NavButtons>
        );
        let backButton = (<BackButton>Назад</BackButton>);

        return (
            <div>
                <NavBar backButton={backButton} navButtons={navButtons}/>
            </div>
        )
    }
}

export default NewClass;