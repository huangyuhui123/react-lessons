import React, { Component,Fragment } from 'react';
import {TodoHeader,TodoInput,TodoList,Like,Test} from './components';

class App extends Component {
    constructor(){
        super();
        this.state={
            todos:[
                {id:1,
                    title:'pass',
                    completed:true
                },
                {id:2,
                    title:'meihao',
                    completed:false
                }
            ]
        }
    }

    addToDo =(title)=>{
        console.log(title);
        //push 之后返回的是数组的长度
        /* this.setState({
            todos:this.state.todos.push({
                id:Math.random(),
                title: title,
                completed: false
            })
        }) */


        //这是对的
     /*    this.setState({
            todos:this.state.todos.concat({
                id:Math.random(),
                title: title,
                completed: false
            })
        }) */

        //如果想用push 必须用先复制一份
        //const newtodos = this.state.todos.slice();
        const newtodos = [...this.state.todos]
        console.log('newtodos',newtodos);
        newtodos.push(
            {
                id:Math.random(),
                title: title,
                completed: false
            }
        )
        this.setState({
            todos:newtodos
        })
    }

    oncheckboxcompelted = (id) =>{
       // console.log(`sss${id}`)
        this.setState((prevState)=>{
            return {
                todos:prevState.todos.map(todo=>{
                    if(todo.id === id){
                        todo.completed = !todo.completed
                    }

                    return todo
                })
            }
        },()=>{})
    }
    render() {
        return (
            // <Fragment>
            //     <TodoHeader/>
            //     <TodoInput/>
            //     <TodoList/>
            // </Fragment>
            <>
                <TodoHeader title="待办事件">很美好的事情</TodoHeader>
                <TodoInput btnText="ADD" addtodo={this.addToDo}/>
                <TodoList todos={this.state.todos} 
                    oncompeltedChange = {this.oncheckboxcompelted}
                />
                <Like/>
                {/* <Test/> */}
            </>


        );
    }
}

export default App;