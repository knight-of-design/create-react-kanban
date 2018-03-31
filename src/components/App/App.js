import React, { Component } from 'react';
//import TodoManager from '../TodoManager/TodoManager'
import KanbanColumn from '../KanbanColumn/KanbanColumn'
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  render() {
      const {data} = this.props;
      const columns = [1,2,3,4]

    return (
      <div className="App">

          <section>
              {
                  columns.map(column => (<KanbanColumn num={column} name={"Col" + column} taskList={data['taskList'+column]}/>))
              }
          </section>
      </div>
    );
  }
}

export default App;
