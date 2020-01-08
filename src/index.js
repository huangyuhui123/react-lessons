import React, { Component, createContext } from 'react';
import { render } from 'react-dom';


import {ConterProvider} from './CounterPrivider'
import { CountBtn,Counter} from './components';









class App extends Component {
    render() {
        return (
            <>
                <CountBtn type="decrement" >-</CountBtn>
                <Counter />
                <CountBtn type="increment" >+</CountBtn>
            </>
        )
    }
}

render(
    <ConterProvider >
        <App />
    </ConterProvider>
    ,
    document.querySelector('#root')
)

