import React from 'react';
import ReactDOM from 'react-dom';


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
const App = (props) => {
    return (
        <div>
            {/* 只要在jsx里面插入js代码，加一层花括号即可，注释也是JS，所以这里的注释就加了一层花括号 */}
            <h1 title= {props.title}>hello,Welocme {props.title}!</h1>
            <p>优秀的 {props.title}</p>
        </div>
    )
}

ReactDOM.render(
    <App title="React 16.8"/>,
    document.querySelector('#root')
) 