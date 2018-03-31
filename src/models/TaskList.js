import {observable, computed} from 'mobx'

class TaskList {
    @observable tasks = [];

    addTask(task) {
        this.tasks.push({ name:task })
    }

    removeTask(index){
        this.tasks.splice(index, 1)
    }
}

export default TaskList;