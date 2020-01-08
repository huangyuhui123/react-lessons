import React,{Component} from 'react'
import {CounterSumer} from '../../CounterPrivider'

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


export default CountBtn