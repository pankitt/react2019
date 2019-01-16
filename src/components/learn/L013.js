import React, {Component} from 'react';

class L013 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            email: '',
            message: 'Текст сообщения',
            language: 'JavaScript',
            languageMultiple: ['Java', 'C#']
        };
    }

    onSubmit = (event) => {
        console.log(`${this.state.login}, добро пожаловать!`);
        console.log(`Сообщение -${this.state.message}- успешно отправлено получателю ${this.state.email}`);
        console.log(`Вы выбрали язык: ${this.state.language}`);
        event.preventDefault();
    };

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    };
    onLoginChange = (event) => {
        this.setState({login: event.target.value.toUpperCase()});
    };
    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    };
    onMessageChange = (event) => {
        this.setState({message: event.target.value});
    };
    onSelectChange = (event) => {
        this.setState({language: event.target.value});
    };
    onSelectChangeMultiple = (event) => {
        this.setState({languageMultiple: event.target.value});
    };

    render() {
        return (
            <form className="my-form" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label> Логин: <input className="form-control" type="text" name="login" value={this.state.login}
                                         onChange={this.onLoginChange}/></label>
                </div>
                <div className="form-group">
                    <label> Пароль: <input className="form-control" type="password" name="password" value={this.state.password}
                                          onChange={this.onPasswordChange}/></label>
                </div>
                <div className="form-group">
                    <label> email получателя: <input className="form-control" type="text" name="email" value={this.state.email}
                                                    onChange={this.onEmailChange}/></label>
                </div>
                <div className="form-group">
                    <label>Текст сообщения: <textarea className="form-control" name="message" value={this.state.message}
                                                     onChange={this.onMessageChange}/></label>
                </div>
                <div className="form-group">
                    <select className="form-control" value={this.state.language} onChange={this.onSelectChange}>
                        <option value="C++">C++</option>
                        <option value="Java">Java</option>
                        <option value="C#">C#</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Scala">Scala</option>
                    </select>
                </div>
                <div className="form-group">
                    <select className="form-control" multiple={true} value={this.state.languageMultiple} onChange={this.onSelectChangeMultiple}>
                        <option value="C++">C++</option>
                        <option value="Java">Java</option>
                        <option value="C#">C#</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Scala">Scala</option>
                    </select>
                </div>

                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </div>
            </form>
        );
    }
}

export default L013;