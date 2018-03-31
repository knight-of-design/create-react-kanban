import React, { Component } from 'react'
import KanbanColumn from '../KanbanColumn/KanbanColumn'
import logo from '../../logo.svg'
import './App.css'

class App extends Component {
  render() {
      const {data} = this.props
      const taskGroups = data.taskGroups || []

    return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Quantum Kanban</h1>
          </header>
          <section className="Kanban">
              {
                  taskGroups.map((taskList,index) => (<KanbanColumn key={index} num={index}  taskGroups={taskGroups} taskList={taskList}/>))
              }
          </section>
      </div>
    )
  }
}

export default App
