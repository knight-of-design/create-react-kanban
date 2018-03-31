import TaskList from './models/TaskList'

const taskGroups = []

for (let i = 1; i <= 4; i++){
    taskGroups.push(TaskList.of('List ' + i,'Do Chores', 'Travel to Hawaii'))
}


export default {taskGroups}