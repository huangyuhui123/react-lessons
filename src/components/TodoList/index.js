import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
    render() {
        return (
            <ul>
                <TodoItem/>
            </ul>
        );
    }
}

export default TodoList;