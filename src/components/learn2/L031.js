import React, { Component } from 'react';

class NewClass extends Component {
    /*constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }*/

    onSubmit = (event) => {
        //console.log(`Selected file - ${this.fileInput.current.files[0].name}`);
        console.log(`Selected file - ${this.fileInput.files[0].name}`);
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="custom-file">
                    <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                        //ref={this.fileInput}
                        ref={input => {
                            this.fileInput = input;
                        }}
                    />
                    <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                </div>

                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        );
    }
}

export default NewClass;