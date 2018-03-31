import React, { Component } from 'react'
import KanbanColumn from '../KanbanColumn/KanbanColumn'
import logo from '../../logo.svg'
import './App.css'

class App extends Component {
  render() {
      const {data} = this.props
      const columns = [1,2,3,4]

    return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Quantum Kanban</h1>
          </header>
          <section>
              {
                  columns.map(column => (<KanbanColumn key={column} name={"Col" + column} taskList={data['taskList'+column]}/>))
              }
          </section>
      </div>
    )
  }
}

export default App
