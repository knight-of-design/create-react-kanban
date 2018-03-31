import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TodoManager from './TodoManager';
import data from '../../data'

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoManager todoList={data.todoList} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('renders a todo list', () => {

    const component = renderer.create(<TodoManager todoList={data.todoList} />)
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});