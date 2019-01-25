import React, {Component, PureComponent} from "react";

class UserList extends PureComponent {
    render() { return (<h3>{this.props.users.join(',')}</h3>); }
}

class UserAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {users: ['User 1']};
    }

    onAddUser = () => {
        const users = this.state.users;

        this.setState(prevState => ({
            // users: prevState.users.concat([`User ${users.length}`])
            users: [...prevState.users, ` User ${users.length}`]
        }));
    };

    onDellUsers = () => {
        this.setState({users: ['User 1']})
    };

    render() {
        return (
            <div>
                <button className="btn btn-primary mr-2" onClick={this.onAddUser}>Add user</button>
                <button className="btn btn-secondary" onClick={this.onDellUsers}>Delete</button>
                <UserList users={this.state.users} />
            </div>
        );
    }
}

class NewClass extends Component {
    render(){
        return (
            <div>
                <h5>Title out</h5>
                <UserAdmin/>
            </div>
        );
    }
}

export default NewClass;