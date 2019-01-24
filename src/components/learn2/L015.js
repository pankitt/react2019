import React, { Component } from "react";

function Button(props) {
    return <button onClick={props.onClick} className="btn btn-primary mr-2">Say Hello</button>;
}

function HelloButton() {
    function handleClick() {
        console.log('Hello!');
    }
    return <Button onClick={handleClick} />;
}

class Dialog extends Component {
    componentDidMount() {
        this.el.classList.add("py-2")
    }
    componentWillUnmount() {
        this.el.classList.remove("py-2")
    }

    render() {
        return <div ref={el => this.el = el} title={this.props.title}>{this.props.children}</div>;
    }
}

class NewClass extends Component {
    constructor(props){
        super(props);
        this.state = {isDialogShowed: false};
    }

    showDialog = () => {
        this.setState(state => ({ isDialogShowed: !state.isDialogShowed }));
    };

    render(){
        return (
            <div>
                <HelloButton />
                <button onClick={this.showDialog} className="btn btn-primary">Toggle диалог</button>
                {this.state.isDialogShowed ? <Dialog title="Диалог">Диалог</Dialog> : null}
            </div>
        );
    }
}

export default NewClass;