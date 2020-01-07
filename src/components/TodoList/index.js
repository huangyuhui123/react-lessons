import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem'


class TodoList extends Component {
    static propTypes ={
        todos: PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })).isRequired,
        oncompeltedChange: PropTypes.func
    }
    constructor(){
        super();
        this.state={

        }
    }
    render() {
        return (
            <ul>
                {
                    this.props.todos.map((todo)=>{
                        return(
                            <TodoItem 
                                key={todo.id} 
                                {...todo}
                                oncompeltedChange= {this.props.oncompeltedChange}
                                />
                        )
                    })
                }
                
            </ul>
        );
    }
}

export default TodoList;