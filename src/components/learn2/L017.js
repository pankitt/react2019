import React, {Component, Fragment} from "react";

class MyCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.color !== nextProps.color) return true;
        if (this.state.value !== nextState.value) return true;
        return false;
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