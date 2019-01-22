import React, {Component} from 'react';

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div>Warning!</div>
    );
}

function DangerAlert(props) {
    return (
        <h6 className="alert alert-danger">{props.text}</h6>
    );
}

class NewClass extends Component {
    constructor(props) {
        super(props);
        this.state = {isDangerAlertShowed: true}
    }

    toggleDangerAlert = () => {
        this.setState(state => ({
            isDangerAlertShowed: !state.isDangerAlertShowed
        }));
    };

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.isDangerAlertShowed} />
                {this.state.isDangerAlertShowed ?
                    <DangerAlert text={'Внимание! В приложении возникли некоторые проблемы!'} /> : null}
                <button className="btn btn-primary" onClick={this.toggleDangerAlert}>
                    {this.state.isDangerAlertShowed ? 'Скрыть' : 'Показать'}
                </button>
            </div>
        )
    }
}

export default NewClass;