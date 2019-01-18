import React, { Component } from 'react';

class NewClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: ''
        };
    }

    addName() {
        this.setState({
            name: 'Mala',
            surname: 'Duge'
        });
    }
    componentDidMount() {
        this.addName();
    }

    render() {
        const {name, surname} = this.state;


        return (
            <div>
                {name} {surname}
            </div>
        );
    }
}
export default NewClass;