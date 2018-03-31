import {observable} from 'mobx'

class TaskList {
    static of(...tasks){
       const result = new TaskList();
        tasks.forEach((task)=>{
            result.addTask(task)
        })
    }

    @observable tasks = [];

    addTask(task) {
        this.tasks.push({ name:task })
    }

    removeTask(index){
        this.tasks.splice(index, 1)
    }
}

export default TaskList;