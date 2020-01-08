import React, { Component, createContext } from 'react';
import { render } from 'react-dom';




const {
    Provider,
    Consumer: CounterSumer
} = createContext()

//直接使用Provider不利于装状态管理，封装一个Provider
class ConterProvider extends Component {
    constructor() {
        super();
        this.state = {
            count: 100
        }
    }
    decrement=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    
    render() {
        return (
            //使用Provider这个组件，它必须有一个value值，value值可以传递任何数据，一般还是除传递一个对象
            <Provider value={{
                count:this.state.count,
                ondecrement:this.decrement,
                onincrement:this.increment
                }}>
                {this.props.children}
            </Provider>
        )
    }
}


class Counter extends Component {
    render() {
        return (
            //使用CounterSumer,这里的children必须是一个方法,这个方法有一个参数，这个参数就是Provider的value
            <CounterSumer>
                {/* {(arg)=>{
                    console.log(arg)
                    return <span>{10}</span>
                }} */}
                
                {({count})=>{
                    return <span>{count}</span>
                }}
            </CounterSumer>
        )
    }
}


class CountBtn extends Component {
    render() {
        return (
            <CounterSumer>
                {
                    ({ondecrement,onincrement})=>{
                        const hander = this.props.type=="decrement"?ondecrement:onincrement
                        return (
                            <button onClick={hander}>{this.props.children}</button>
                        )
                    }
                }
             
            </CounterSumer>
        )
    }
}



class App extends Component {
    render() {
        return (
            <>
                <CountBtn type="decrement" >-</CountBtn>
                <Counter />
                <CountBtn type="increment" >+</CountBtn>
            </>
        )
    }
}

render(
    <ConterProvider >
        <App />
    </ConterProvider>
    ,
    document.querySelector('#root')
)

import React, { Component, createContext } from 'react';
import { render } from 'react-dom';




const {
    Provider,
    Consumer: CounterSumer
} = createContext()

//直接使用Provider不利于装状态管理，封装一个Provider
class ConterProvider extends Component {
    constructor() {
        super();
        this.state = {
            count: 100
        }
    }
    decrement=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    
    render() {
        return (
            //使用Provider这个组件，它必须有一个value值，value值可以传递任何数据，一般还是除传递一个对象
            <Provider value={{
                count:this.state.count,
                ondecrement:this.decrement,
                onincrement:this.increment
                }}>
                {this.props.children}
            </Provider>
        )
    }
}


class Counter extends Component {
    render() {
        return (
            //使用CounterSumer,这里的children必须是一个方法,这个方法有一个参数，这个参数就是Provider的value
            <CounterSumer>
                {/* {(arg)=>{
                    console.log(arg)
                    return <span>{10}</span>
                }} */}
                
                {({count})=>{
                    return <span>{count}</span>
                }}
            </CounterSumer>
        )
    }
}


class CountBtn extends Component {
    render() {
        return (
            <CounterSumer>
                {
                    ({ondecrement,onincrement})=>{
                        const hander = this.props.type=="decrement"?ondecrement:onincrement
                        return (
                            <button onClick={hander}>{this.props.children}</button>
                        )
                    }
                }
             
            </CounterSumer>
        )
    }
}



class App extends Component {
    render() {
        return (
            <>
                <CountBtn type="decrement" >-</CountBtn>
                <Counter />
                <CountBtn type="increment" >+</CountBtn>
            </>
        )
    }
}

render(
    <ConterProvider >
        <App />
    </ConterProvider>
    ,
    document.querySelector('#root')
)

