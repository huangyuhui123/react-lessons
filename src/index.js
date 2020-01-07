import React, { useState,useEffect } from 'react';
import { render } from 'react-dom';

const Counter = () => {
    //初始值在useState 括号中传入
    const [count, setCount] = useState(0)

    useEffect(()=>{
        // 相等于componentDidittle

        document.title = `当前的数量为{count}`
    })
    return (
        <div>
            <p>当前的数量为{count}</p>
            {/* 这里的setCount就是和useState所生成的方法（第二个），和setState 不一样的地方就在于参数，参数是一个新值 */}
            <button onClick={() => { setCount(count - 1) }}>-</button>
            <span>{count}</span>
            <button onClick={() => { setCount(count + 1) }}>+</button>
        </div>
    )
}



render(
    <Counter />,
    document.querySelector('#root')
)


