import React, {Component} from "react";

const ToDo = props => (
    <tr>
        <td>
            <label>{props.id}</label>
        </td>
        <td>
            <input />
        </td>
        <td>
            <label>{props.createdAt.toTimeString()}</label>
        </td>
    </tr>
);

class ToDoList extends Component {
    constructor() {
        super();
        const date = new Date();
        const toDoCounter = 1;
        this.state = {
            list: [
                {
                    id: toDoCounter,
                    createdAt: date,
                },
            ],
            toDoCounter: toDoCounter,
        };
    }

    sortByEarliest() {
        const sortedList = this.state.list.sort((a, b) => {
            return a.createdAt - b.createdAt;
        });
        this.setState({
            list: [...sortedList],
        });
    }

    sortByLatest() {
        const sortedList = this.state.list.sort((a, b) => {
            return b.createdAt - a.createdAt;
        });
        this.setState({
            list: [...sortedList],
        });
    }

    addToEnd() {
        const date = new Date();
        const nextId = this.state.toDoCounter + 1;
        const newList = [
            ...this.state.list,
            {id: nextId, createdAt: date},
        ];
        this.setState({
            list: newList,
            toDoCounter: nextId,
        });
    }

    addToStart() {
        const date = new Date();
        const nextId = this.state.toDoCounter + 1;
        const newList = [
            {id: nextId, createdAt: date},
            ...this.state.list,
        ];
        this.setState({
            list: newList,
            toDoCounter: nextId,
        });
    }

    render() {
        return (
            <div>
                <code>key=id</code>
                <br />
                <button onClick={this.addToStart.bind(this)}>
                    Add New to Start
                </button>
                <button onClick={this.addToEnd.bind(this)}>
                    Add New to End
                </button>
                <button onClick={this.sortByEarliest.bind(this)}>
                    Sort by Earliest
                </button>
                <button onClick={this.sortByLatest.bind(this)}>
                    Sort by Latest
                </button>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th />
                            <th>created at</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.list.map((todo) => (
                        <ToDo key={todo.id} {...todo} />
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}


class NewClass extends Component {
    render(){
        return (
            <div>
                <ToDoList />
            </div>
        )
    }
}

export default NewClass;