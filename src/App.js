import React, { Component,Fragment } from 'react';
import {TodoHeader,TodoInput,TodoList } from './components';

class App extends Component {
    render() {
        return (
            // <Fragment>
            //     <TodoHeader/>
            //     <TodoInput/>
            //     <TodoList/>
            // </Fragment>
            <>
                <TodoHeader title="待办事件">很美好的事情</TodoHeader>
                <TodoInput btnText="ADD"/>
                <TodoList/>
            </>


        );
    }
}

export default App;