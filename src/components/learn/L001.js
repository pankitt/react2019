import React, { Component } from 'react';

///
function formatName(val) {
    return val.firstName + ' ' + val.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = (
    <h4>
        Hello, {formatName(user)}!
    </h4>
);

///
function getGreeting(val) {
    if (val) {
        return <h4>Hello, {formatName(val)}!</h4>;
    }
    return <h4>Hello, Stranger.</h4>;
}

///
class NewClass extends Component {
    render() {
        const youName = 'Josh Perez';
        const youElement = <h4>Hello, {youName}</h4>;

        return (
            <div>
                <h4>Hello, {youName}</h4>
                {youElement}

                {element}
                {getGreeting(user)}
                {getGreeting()}
            </div>
        )
    }
}

export default NewClass;