import React, {Component} from 'react';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = numbers.map((num) => {
    const i = num * 10;
    return <li key={num.toString()}>{i}</li>;
});

const users = ['Вася', 'Петя', 'Максим', 'Егор'];
function UserList(props){
    const users = props.users;
    const items = users.map((user) => <li className="list-group-item" key={user.toString()}>{user}</li>);
    return (<ul className="list-group">{items}</ul>)
}

class L011 extends Component {
    render() {
        return (
            <div>
                <ul className="list-group">{result}</ul>
                <UserList users={users}/>
                <ul>
                    {numbers.map( (num) => <li key={num.toString()}>{num}</li> )}
                </ul>
            </div>
        )
    }
}

export default L011;