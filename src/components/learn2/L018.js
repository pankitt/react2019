import React, {Component, Fragment, PureComponent} from "react";

class MyCounter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {value: 0};
    }

    render() {
        return (
            <Fragment>
                <h5>Title in</h5>
                <button className="btn btn-primary"
                        style={this.props.color}
                        onClick={() => this.setState(state => ({value: state.value + 1}))}>
                    Count: {this.state.value}
                </button>
            </Fragment>
        );
    }
}

class NewClass extends Component {
    render(){
        return (
            <div>
                <h5>Title out</h5>
                <MyCounter/>
            </div>
        );
    }
}

export default NewClass;