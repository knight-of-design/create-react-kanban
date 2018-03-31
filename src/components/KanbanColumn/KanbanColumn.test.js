import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import KanbanColumn from './KanbanColumn'
import data from '../../data'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<KanbanColumn taskList={data.taskList} />, div)
    ReactDOM.unmountComponentAtNode(div)
})

test('renders a Kanban column', () => {

    const component = renderer.create(<KanbanColumn taskList={data.taskList}/>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})