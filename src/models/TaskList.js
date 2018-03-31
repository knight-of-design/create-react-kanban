import {observable} from 'mobx'

class TaskList {
    static of(...tasks){
       const result = new TaskList()
        tasks.forEach((task)=>{
            result.addTask(task)
        })
        return result
    }

    @observable tasks = [];

    addTask(task) {
        this.tasks.push({ name:task })
    }

    removeTask(index){
        this.tasks.splice(index, 1)
    }

    insertTask(index,task){
        this.tasks.splice(index, 0, task)
    }
}

export default TaskList