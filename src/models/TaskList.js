import {observable} from 'mobx'

class TaskList {
    static of(label,...tasks){
       const result = new TaskList()
        result.label = label
        tasks.forEach((task)=>{
            result.addTask(task)
        })
        return result
    }

    @observable label = "";
    @observable tasks = [];

    addTask(task) {
        this.tasks.push({ name:task })
    }

    replaceTask(index,newTask) {
        this.tasks.splice(index, 1, newTask)
    }

    removeTask(index){
        this.tasks.splice(index, 1)
    }

    insertTask(index,task){
        this.tasks.splice(index, 0, task)
    }
}

export default TaskList