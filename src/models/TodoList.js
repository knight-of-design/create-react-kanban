import {observable, computed} from 'mobx'

class TodoList {
    @observable todos = [];
    @computed get progress() {
        const completed = this.todos.filter(todo => todo.completed === true).length
        const total = this.todos.length
        return completed * 100 / total + '%'
    }
    addTodo(task) {
        this.todos.push({ task, completed: false })
    }
}

export default TodoList;