import React,{Component} from 'react'
import {CounterSumer} from '../../CounterPrivider'

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

export default Counter