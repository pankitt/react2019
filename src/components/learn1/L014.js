import React, {Component} from 'react';

class NewClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            email: '',
            message: 'Текст сообщения',
            language: 'JavaScript',
            languageMultiple: ['Java', 'C#'],
            isGoing: true
        };
    }

    onSubmit = (event) => {
        console.log(`${this.state.login}, добро пожаловать!`);
        console.log(`Сообщение -${this.state.message}- успешно отправлено получателю ${this.state.email}`);
        console.log(`Вы выбрали язык: ${this.state.language}`);
        console.log(`Multiple: ${this.state.languageMultiple}`);
        console.log(`Is going: ${this.state.isGoing}`);
        event.preventDefault();
    };

    onInputChange = (event) => {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    };
    onSelectChangeMultiple = (event) => {
        /*this.setState({
            languageMultiple: [...event.target.selectedOptions].map(o =>  o.value)
        });*/
        //let value = Array.from(event.target.selectedOptions, option => option.value);
        const value = [...event.target.selectedOptions].map(o => o.value);
        this.setState({languageMultiple: value});
    };
    onCheck = (event) => {
        this.setState({isGoing: event.target.checked});
    };

    render() {
        return (
            <form className="my-form" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label> Логин: <input className="form-control" type="text" name="login" value={this.state.login}
                                          onChange={this.onInputChange}/></label>
                </div>
                <div className="form-group">
                    <label> Пароль: <input className="form-control" type="password" name="password" value={this.state.password}
                                           onChange={this.onInputChange}/></label>
                </div>
                <div className="form-group">
                    <label> email получателя: <input className="form-control" type="text" name="email" value={this.state.email}
                                                     onChange={this.onInputChange}/></label>
                </div>
                <div className="form-group">
                    <label>Текст сообщения: <textarea className="form-control" name="message" value={this.state.message}
                                                      onChange={this.onInputChange}/></label>
                </div>
                <div className="form-group">
                    <select name="language" className="form-control" value={this.state.language} onChange={this.onInputChange}>
                        <option value="C++">C++</option>
                        <option value="Java">Java</option>
                        <option value="C#">C#</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Scala">Scala</option>
                    </select>
                </div>


                <div name="languageMultiple" className="form-group">
                    <select className="form-control" multiple={true} value={this.state.languageMultiple} onChange={this.onSelectChangeMultiple}>
                        <option value="C++">C++</option>
                        <option value="Java">Java</option>
                        <option value="C#">C#</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Scala">Scala</option>
                    </select>
                </div>
                <div className="form-group">
                    <label> Is going:
                        <input
                            className="ml-1"
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.onCheck} />
                    </label>
                </div>

                <input type="submit" className="btn btn-primary" value="Submit" />
            </form>
        );
    }
}

export default NewClass;