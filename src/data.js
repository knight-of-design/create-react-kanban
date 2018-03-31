import TodoList from './models/TodoList'
import TaskList from './models/TaskList'

const taskList = new TaskList()
const taskLists = {}

for (let i = 0; i < 4; i++){
    const taskList = new TaskList()
    taskList.addTask('Do Chores')
    taskList.addTask('Travel to Hawaii')
    taskLists['taskList' + (i+1)] =  taskList


}


export default taskLists