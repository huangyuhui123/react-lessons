import React, { Component } from 'react';
const noop = () => { }

class TodoItem extends Component {
    //老版本的抗，通过props 来初始化一个state，在props修改之后，这个state不会被更新，那么就要借助于willcomponentReceiveProps
 /*    constructor(props){
        super();
        this.state={
            completeTexted:props.completed?'完成':'未完成'
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        this.setState({
            completeTexted:nextProps.completed?'完成':'未完成'
        })
    } */

    //新版的
    constructor(){
        super();
        this.state={
            completeTexted:''
        }
    }

    static getDerivedStateFromProps(props){
        return  {
            completeTexted:props.completed?'完成':'未完成'
        }
    }

    handleCheckboxChange = () => {

        //this.props.oncompeltedChange(this.props.id) 
        //如果父组件没有给子组件传函数的话，需要判断函数的存在或者给函数赋值空函数
        //就这样写：给函数赋值空函数
        /*   const {oncompeltedChange=()=>{},
              id    
          } = this.props
          oncompeltedChange(id); */
        //或判断函数的存在
        /* const {oncompeltedChange,id} = this.props;
        oncompeltedChange && oncompeltedChange(id);
 */
        // 定义一个全局公共的空函数
        const { oncompeltedChange = noop,
            id
        } = this.props
        oncompeltedChange(id);
    }

    shouldComponentUpdate(nextProps,nextState){
        //console.log(nextProps,nextState);
        //console.log(this.props,this.state);
        return nextProps.completed !== this.props.completed
    }
    
    render() {
        console.log(`todoItem ${this.props.title}render,`)
        return (
            <li>
                <input type="checkbox" onClick={this.handleCheckboxChange} />
                <span>{this.props.title}</span>
                &nbsp;
                {/* <span>{this.props.completed ? '已完成' : '未完成'}</span>*/}
                <span>{this.state.completeTexted}</span>
            </li>
        );
    }
}

export default TodoItem;