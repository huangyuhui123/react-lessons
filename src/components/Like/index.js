import React, { Component } from 'react'

export default class index extends Component {
    constructor(){
        super();
        this.state={
            isLiked:false
        }
    }
    handlLikedClick = () =>{
        //setState有两个参数，
        //第一个参数有两种情况：第一种情况是个对象
        /* this.setState({
            isLiked:!this.state.isLiked
        }) */
        //第二种情况是一个方法
        this.setState((prevState,props)=>{
            console.log(props,prevState)
            console.log(`setState.内部的类${this.state.isLiked}`)
            return {
                isLiked:!prevState.isLiked
            }
        },()=>{
            //由于setState是异步的，如果想要获取到最新的state,应该在这个回调里来获取
            console.log(this.state.isLiked)
        })
        console.log(`setState外部的":${this.state.isLiked}`)
    }

    render() {
        return (
            <div>
                <span onClick={this.handlLikedClick}> 
                  {this.state.isLiked? '喜欢 💗':'取消 🖤'}
                </span>

            </div>
        )
    }
}
