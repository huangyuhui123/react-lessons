import React,{Component,createContext} from 'react';

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

export  {
    CounterSumer,
    ConterProvider
}