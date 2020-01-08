import React from 'react';
import {render} from 'react-dom';

import App from './App';
import Anther from './Anther';


render(
    <App/>,
    document.querySelector('#root')
)


var add =(x)=>{
    return (y)=>{
        return x+y
    }
}

add()
//执行结果
/* (y)=>{
        return x+y
    } */
add(1)
//执行结果
/* (y)=>{
        return x+y
    } */
add(1)(2)
//3