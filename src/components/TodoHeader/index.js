import React from 'react';
import PropTypes from 'prop-types'

export default function TodoHeader(props) {
        return (
            <div>
                <h1>{props.children}</h1>
                <h2>{props.title}</h2>
            </div>
        );
}


TodoHeader.propTypes ={
    title: PropTypes.string,
    children: PropTypes.string.isRequired
}


//函数式组件是组件的名字。propTypes={}
//类组件的类型检查是在类里面放一个static PropTypes方法和 static defaultProps