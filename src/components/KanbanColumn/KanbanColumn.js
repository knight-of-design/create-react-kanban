import React, { Component } from 'react';
import './KanbanColumn.css';
import {observer} from 'mobx-react'

@observer
class KanbanColumn extends Component {

    render() {
        const { name, taskList, num } = this.props

        return (
            <div className="Kanban-column">
                <h1 className="name">{name}</h1>
                <ul className="tasks">
                    {taskList && taskList.tasks.length && taskList.tasks.map((task,index) => {
                        return (
                            <li>
                                {(num !== 1) && <button> &lt; </button>}

                                {task.name}

                                {(num !== 4) && <button> &gt; </button>}
                            </li>)
                    })
                    }
                </ul>
                <button onClick={this.onAdd}>
                    + Add a card
                </button>
            </div>
        );
    }

    onAdd = () => {
        const {taskList} = this.props

        const task = window.prompt('Card', '') || "New card"
        taskList.addTask(task)
    };

    generateOnMove = (task,from,to) => {

        const {taskList} = this.props
        taskList.removeTask(from)


}


}

export default KanbanColumn