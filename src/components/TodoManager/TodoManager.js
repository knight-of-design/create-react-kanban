import React, { Component } from 'react';
import './TodoManager.css';
import {observer} from 'mobx-react'

@observer
class TodoManager extends Component {

    render() {
        const { todoList } = this.props

        return (
            <div className="Todo-manager">
        <span className="progress">
         Progress: { todoList.progress }
        </span>
                <input className="new-todo" placeholder="Add Something To Do"  onKeyPress={this.onMakeTodo}/>

                <ul className="todo-list">
                    { todoList.todos.map((todo, index) => <Todo todo={todo} key={index} />)  }
                </ul>
            </div>
        );
    }

    onMakeTodo = (e) => {
        if (e.key==='Enter'){
            const todo = e.target.value
            this.props.todoList.addTodo(todo)
            e.target.value=''
        }
    };
}


@observer
class Todo extends React.Component {
    render() {
        const { todo } = this.props
        return (
            <li onDoubleClick={this.onRename}>
                <input
                    className="toggle"
                    type="checkbox"
                    checked={ todo.completed }
                    onChange={ this.onToggleCompleted }
                />
                <label>
                    { todo.task }
                </label>
            </li>
        );
    }
    onToggleCompleted = () => {
        const todo = this.props.todo
        todo.completed = !todo.completed
    };
    onRename = () => {
        const todo = this.props.todo
        todo.task = prompt('Task name', todo.task) || ""
    };
}

export default TodoManager;
