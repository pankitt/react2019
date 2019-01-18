import React, {Component} from 'react';

const posts = [
    {id: 1, title: 'Hello', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}


const users = [
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Петя'},
    {id: 3, name: 'Ваня'}
];
const messages = [
    {id: 1, message: 'Всем привет!', authorId: 1},
    {id: 2, message: 'И тебе привет!', authorId: 2},
    {id: 3, message: 'Привет, Вася :)', authorId: 3},
    {id: 4, message: 'AAA)', authorId: 1}
];

function Chat(props) {
    const users = props.users;
    const userList = (
        <div> Пользователи чата:
            {users.map((user) =>
                <b key={user.id}> {user.name}; </b>
            )}
        </div>
    );
    const messageList = props.messages.map((message) => {
        let author = null;
        //users.forEach((user) => {if(user.id === message.authorId) author = user});
        users.filter(user => user.id === message.authorId ? author = user : null);
        return (<p key={message.id}>
            <b>{author.name}: </b>
            <span>{message.message}</span>
        </p>)
    });
    return (
        <div>
            {userList}
            {messageList}
        </div>
    );
}

class NewClass extends Component {
    render() {
        return (
            <div>
                <Blog posts={posts} />
                <Chat users={users} messages={messages}/>
            </div>
        )
    }
}

export default NewClass;