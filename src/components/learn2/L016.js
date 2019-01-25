import React, { Component } from "react";

const users = [{id: 1, name: 'Вася'}, {id: 2, name: 'Петя'}];
const users2 = [];

//1
function User(props) {
    return <li>{props.user.name}</li>;
}
function UserList() {
    return (
        <ul>
            {users.map((user) => <User key={user.id} user={user} />)}
        </ul>
    );
}

//2
function UserList2(props) {
    return (
        <ul>
            {props.users.map((user) => props.children(user))}
        </ul>
    )
}
function UserPage() {
    return (
        <UserList2 users={users}>
            {(user) => <li key={user.id}>Пользователь: {user.name}</li>}
        </UserList2>
    );
}

//spread1
const Button = props => {
    const { type, ...other } = props;
    const className = type === "primary" ? "btn-primary" : "btn-secondary";
    return <button className={'btn ' + className} {...other} />;
};

//spread2
function Greeting(props) {
    return (
        <div>
            {props.firstName} {props.lastName}
        </div>
    )

}


class NewClass extends Component {
    render(){
        const props = {firstName: 'Ben', lastName: 'Hector'};

        return (
            <div>
                <Greeting {...props} />
                <Button type="primary" onClick={() => console.log("Нажато!")}>
                    Button
                </Button>
                <UserList/>
                <UserPage/>
                {users2.length && <UserList /> }
                {users.length > 0 && <UserList /> }
            </div>
        );
    }
}

export default NewClass;