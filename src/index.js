import React from 'react';
import {render} from 'react-dom';

import App from './App';


render(
    <App/>,
    document.querySelector('#root')
)


function count(num){
    return num+1
}


function* test(){
    const one = yield count(0);
    const two = yield count(one);
    const three = yield count(two);

}

const test1= test();
test1.next();
test1.next();
test1.next();