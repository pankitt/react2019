import React, {Component} from 'react';

function Console(props) {
    const errors = props.errors;
    return (
        <div>
            <h5>Attention!</h5>
            {errors.length > 0 &&
                <p>You have <b>{errors.length}</b> errors.</p>
            }
        </div>
    );
}

const errors = [
    'Failed to load resource: net::ERR_INSECURE_RESPONSE',
    'TypeError: e is undefined',
    'Uncaught ReferenceError: calculate is not defined'
];

class NewClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSent: false
        }
    }

    render() {
        const isSent = this.state.isSent;

        return (
            <div>
                <p>
                    {isSent ? 'isSent = true' : 'isSent = false'}
                </p>
                <h5>Ваше сообщение {isSent ? 'успешно' : 'не'} отправлено:</h5>
                <Console errors={errors} />
            </div>
        )
    }
}

export default NewClass;