import TaskList from './models/TaskList'

const taskGroups = []

for (let i = 0; i < 4; i++){
    taskGroups.push(TaskList.of('Do Chores', 'Travel to Hawaii'))
}


export default {taskGroups}