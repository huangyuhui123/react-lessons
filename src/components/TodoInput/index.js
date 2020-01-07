//react 通过ref来获取组件或Dom元素，使用ref前必须先调用React.createRef 方法来创建一个ref
import React, { Component,createRef } from 'react';
import PropTypes from 'prop-types'; // ES6

class TodoInput extends Component {
    static propTypes = {
        btnText: PropTypes.string
    }
    static defaultProps = {
        //默认props设置
        btnText: '添加TODO',
        btntext1: '传餐一',
        btntext2: '传参二',
        btntext3: '传参三',
        btntext4:'传参四'


    }
    constructor() {
        super();
        this.state = {
            inputValue: 'xxxx'
        }
        this.handleButtonChange = this.handleButtonChange.bind(this)
        //在 constructor中创建Ref
        this.inputDom = createRef();


    }
    handleInputChange = (e) => {
        //合成之后的事件
        //console.log(e.currentTarget.value)
        this.setState(/* (prevState) => {
            console.log("e.currentTarget.value",e.currentTarget.value)
            return {
                inputValue: e.currentTarget.value
            }
        },  */
         
        {
            inputValue:e.currentTarget.value
        },
        () => {
            //console.log(this.state)
        })
    }
    handleButtonChange() {
       // console.log("w", this.state)
    }
    handlebuttonParams(id) {
       // console.log(id)
    }
    handlebuttonParams2(id){
        //console.log(`2,${id}`)
    }
    handlebuttonParams3(id){
        //console.log(`3,${id}`)
    }
    handlebuttonParams4=()=>{
        //console.log('this.inputDom',this.inputDom)
        this.props.addtodo(this.state.inputValue)
        this.setState({
            inputValue:''
        },()=>{
            this.inputDom.current.focus();
        })
    }
    handlekeyUp=(e)=>{
        if(e.keyCode===13){
            this.handlebuttonParams4()
        }
    }

    /* checkbox */
    handleInputChange1 = (e) => {
        //合成之后的事件
        //console.log(e.currentTarget.value)
        this.setState(/* (prevState) => {
            console.log("e.currentTarget.value",e.currentTarget.value)
            return {
                inputValue: e.currentTarget.value
            }
        },  */
         
        {
            inputValue:e.currentTarget.value
        },
        () => {
           // console.log(this.state)
        })
    }

    handlekeyUp1=(e)=>{
        if(e.keyCode===13){
            this.handlebuttonParams4()
        }
    }

    render() {
        return (
            <div>
                {/* 这是第二种绑定事件的方法 */}
                <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} onKeyUp={this.handlekeyUp} />

                {/* 这是第一宗绑定事件的方法： 这种方法不推荐，因为是匿名函数，每次render都会调用一次匿名函数 */}
                <button onClick={() => {
                    console.log(this.state)
                }}>{this.props.btnText}</button>
                {/* 这是第三种绑定事件的方法：这种方法也是bind(this.会渲染多次，所以把绑定this 放在constructor里，这里只渲染一次) */}
                {/* <button onClick={this.handleButtonChange.bind(this)}>{this.props.btnText}</button> */}
                <button onClick={this.handleButtonChange}>{this.props.btnText}</button>


                {/* 第一种传传参 不推荐*/}
                <button onClick={() => {
                    this.handlebuttonParams(1234)
                }}>{this.props.btntext1}</button>
                {/* 第二种传参的方式 不推荐多次渲染*/}
                <button onClick={this.handlebuttonParams2.bind(this,1234)}>{this.props.btntext2}</button>
                {/* 第三种传餐方式 */}
                <button onClick={()=>{this.handlebuttonParams3(1234)}}>{this.props.btntext3}</button>
                {/* 第四种，调用父组件的方法，react特别推荐 */}
                <button onClick={this.handlebuttonParams4}>{this.props.btntext4}</button>


                <br/>
                {/* checkbox的添加 */}
                
                <input type="text" value={this.state.inputValue} onChange={this.handleInputChange1} onKeyUp={this.handlekeyUp1} ref={this.inputDom}/>
                 {/* 第四种，调用父组件的方法，react特别推荐 */}
                 <button onClick={this.handlebuttonParams4}>{this.props.btntext4}</button>
            </div>
        )
    }
}

export default TodoInput;
