import React, { Component } from 'react';

function Welcome(props) {
    return <h4>Hello, {props.firstName} {props.lastName}</h4>;
}
const element1 = <Welcome firstName="Sara" lastName="Ma" />;
const element2 = <Welcome firstName="Lara" lastName="La" />;

class L002 extends Component {
    render() {
        const { firstName = 'Ihor', lastName = 'I' } = this.props;

        return (
            <div>
                <h4>Hello, {firstName} {lastName }</h4>
                {element1}
                {element2}
                <Welcome firstName="Lara" lastName="Lala" />
                <Welcome firstName="Gara" lastName="Gaa" />
            </div>
        )
    }
}

export default L002;