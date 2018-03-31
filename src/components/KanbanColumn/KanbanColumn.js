import React, { Component } from 'react'
import './KanbanColumn.css'
import {observer} from 'mobx-react'

@observer
class KanbanColumn extends Component {

    render() {
        const { taskGroups, taskList, num } = this.props

        return (
            <div className="Kanban-column">
                <h1 className="name" onDoubleClick={this.onRenameList}>{taskList.label}</h1>
                <ul className="tasks">
                    {taskList && taskList.tasks.map((task,index) => {

                        return (task &&
                            <li key={index} onDoubleClick={this.generateOnEditTask(index)}>
                                {(num !== 0) && <button className="btn-arrow btn-arrow-left" onClick={this.generateOnMoveTask(task,index,num-1)} > &lt; </button>}

                                {task.name}

                                {(num !== taskGroups.length - 1) && <button className="btn-arrow btn-arrow-right" onClick={this.generateOnMoveTask(task,index,num+1)}> &gt; </button>}
                            </li>)
                    })
                    }
                </ul>
                <button className="btn-add" onClick={this.onAddTask}>
                    + Add a card
                </button>
            </div>
        )
    }

    onRenameList = () => {
        const {taskList} = this.props

        taskList.label = window.prompt('List', taskList.label) || 'List'
    };

    onAddTask = () => {
        const {taskList} = this.props

        const task = window.prompt('Task', '') || 'New card'
        taskList.addTask(task)
    };

    generateOnEditTask = (index) => {
        const {taskList} = this.props

        return () => {
            const task = taskList.tasks[index]
            const newTaskName = window.prompt('Task', task.name)
            if (newTaskName) {
                taskList.replaceTask(index,{name:newTaskName})
            }
        }

    }

    generateOnMoveTask = (task, from, to) => {
        const {taskGroups, taskList} = this.props

        return () =>{
            taskList.removeTask(from)
            taskGroups[to].insertTask(from,task)
        }

}


}

export default KanbanColumn