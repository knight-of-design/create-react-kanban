import React, { Component } from 'react'
import './KanbanColumn.css'
import {observer} from 'mobx-react'

@observer
class KanbanColumn extends Component {

    render() {
        const { name, taskGroups, taskList, num } = this.props

        return (
            <div className="Kanban-column">
                <h1 className="name">{name}</h1>
                <ul className="tasks">
                    {taskList && taskList.tasks.map((task,index) => {

                        return (task &&
                            <li key={index}>
                                {(num !== 0) && <button className="btn-arrow btn-arrow-left" onClick={this.generateOnMove(task,index,num-1)} > &lt; </button>}

                                {task.name}

                                {(num !== taskGroups.length - 1) && <button className="btn-arrow btn-arrow-right" onClick={this.generateOnMove(task,index,num+1)}> &gt; </button>}
                            </li>)
                    })
                    }
                </ul>
                <button onClick={this.onAdd}>
                    + Add a card
                </button>
            </div>
        )
    }

    onAdd = () => {
        const {taskList} = this.props

        const task = window.prompt('Card', '') || "New card"
        taskList.addTask(task)
    };

    generateOnMove = (task,from,to) => {

        const {taskGroups, taskList} = this.props

        return () =>{
            taskList.removeTask(from)
            taskGroups[to].insertTask(from,task)
        }

}


}

export default KanbanColumn