import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import './index.css';



//这种方式可以理解为创建了一个简单的react元素
//const app = <h1>hello,Welocme React!</h1>

//函数式组件的形式
// const createApp = (props) => {
//     return (
//         <div>
//             {/* 只要在jsx里面插入js代码，加一层花括号即可，注释也是JS，所以这里的注释就加了一层花括号 */}
//             <h1>hello,Welocme {props.title}!</h1>
//             <p>优秀的 {props.title}</p>
//         </div>
//     )
// }

// const app = createApp({
//     title: 'React 16.8'
// })

//创建组件的第一种方式：使用箭头函数，但是名字的大写，它的原理就是上面的代码
// const App = (props) => {
//     return (
//         <div>
//             {/* 只要在jsx里面插入js代码，加一层花括号即可，注释也是JS，所以这里的注释就加了一层花括号 */}
//             <h1 title= {props.title}>hello,Welocme {props.title}!</h1>
//             <p>优秀的 {props.title}</p>
//         </div>
//     )
// }

// ReactDOM.render(
//     <App title="React 16.8"/>,
//     document.querySelector('#root')
// ) 


//创建组件的第二种方式
class App extends React.Component{
    render() {
        console.log(this.props.title)
        const style={color:'#F00'}
        return  (
          <div>
              <h1 style={style}>类组件</h1>
              <p className="has-text-red">{this.props.title}   </p>
              <li className={classNames('a',{'b':true,'c':false})}>很美好，相信自己呵呵呵呵呵，一切会好起来的, zhge class上只有a,和b</li>
          </div>
        )
    }
}

//类组件渲染原理
const app = new App({
    title:"类组件是继承REACT.rEACdOM"
}).render();  //这个render方法是调用的类组件实例的render方法


ReactDOM.render(
    // <App title="类组件是继承REACT.rEACdOM"/>,
    app,
    document.querySelector('#root')
)  