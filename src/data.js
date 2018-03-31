import TaskList from './models/TaskList'

const taskLists = {}

for (let i = 0; i < 4; i++){
    const taskList = TaskList.of('Do Chores', 'Travel to Hawaii')
    taskLists['taskList' + (i+1)] =  taskList
}


export default taskLists