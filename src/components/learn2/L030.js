import React, { Component } from 'react';

class NewClass extends Component {
    /*constructor(props) {
        super(props);
        this.input = React.createRef();
    }*/

    onSubmit = (event) => {
        //console.log('A name was submitted: ' + this.input.current.value);
        console.log(`A name was submitted: ${this.nameTextField.value}`);
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="inlineFormInputGroup">Имя пользователя:</label>
                    <div className="input-group">
                        <input
                            id="inlineFormInputGroup"
                            className="form-control"
                            /*ref={this.input}*/
                            ref={el => this.nameTextField = el}
                            name="name"
                            type="text"
                            defaultValue="Bob"
                        />
                        <div className="input-group-append">
                            <input className="input-group-text" type="submit" value="Submit" />
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default NewClass;