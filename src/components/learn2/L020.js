import React, {Component, Fragment} from "react";
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

function Child() {
    // The click event on this button will bubble up to parent,
    // because there is no 'onClick' attribute defined
    return (
        <Fragment>
            <div className="modal fade show">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                        </div>
                        <div className="modal-body">
                            <p>Woohoo, you're reading this text in a modal!</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary">Click</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show" />
        </Fragment>
    );
}

class Modal extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        // The portal element is inserted in the DOM tree after
        // the Modal's children are mounted, meaning that children
        // will be mounted on a detached DOM node. If a child
        // component requires to be attached to the DOM tree
        // immediately when mounted, for example to measure a
        // DOM node, or uses 'autoFocus' in a descendant, add
        // state to Modal and only render the children when Modal
        // is inserted in the DOM tree.
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        setTimeout(() => {
            modalRoot.removeChild(this.el);
        }, 500);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {clicks: 0};
    }

    handleClick = () => {
        // This will fire when the button in Child is clicked,
        // updating Parent's state, even though button
        // is not direct descendant in the DOM.
        this.setState(state => ({
            clicks: state.clicks + 1
        }));
    };

    render() {
        return (
            <div onClick={this.handleClick}>
                <h5 className="pt-4">Number of clicks: {this.state.clicks}</h5>
                <p>
                    Open up the browser DevTools
                    to observe that the button
                    is not a child of the div
                    with the onClick handler.
                </p>
                <Modal>
                    <Child />
                </Modal>
            </div>
        );
    }
}



class NewClass extends Component {
    render(){
        return (
            <div>
                <Parent />
            </div>
        )
    }
}

export default NewClass;