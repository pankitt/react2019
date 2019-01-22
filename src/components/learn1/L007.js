import React, { Component } from 'react'

function ErrorMessage() {
    return <h5>Произошла ошибка на сервере. Не удалось сохранить ваши данные.</h5>;
}

function SuccessMessage() {
    return <h5>Ваши данные успешно сохранены!</h5>;
}

function Response(props) {
    const isSuccess = props.isSuccess;

    return isSuccess ? <SuccessMessage/> : <ErrorMessage/>
}

class NewClass extends Component {
    render() {
        return (
            <div>
                <Response isSuccess={true} />
            </div>
        );
    }
}

export default NewClass;