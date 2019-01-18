import React, { Component } from 'react';

function SuccessMessage(props) {
    return (
        <div className={'message message_success'}>
            <MessageContent title={props.title}>{props.children}</MessageContent>
        </div>
    );
}

function MessageContent(props) {
    return (
        <div className="message__content">
            <h5 className="message__title">{props.title}</h5>
            <p className="message__text">{props.children}</p>
        </div>
    );
}


class NewClass extends Component {
    render() {
        return (
            <div>
                <SuccessMessage title="Успех">Операция завершена успешно!</SuccessMessage>
            </div>
        )
    }
}

export default NewClass;