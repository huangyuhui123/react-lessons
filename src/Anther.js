import React, { Component } from 'react'
import WithCopyRight from './WithCopyRight';
import withCopyRight from './WithCopyRight';

//原始写法
/* class Anther extends Component {
    render() {
        return (
            <div>
                anther &nbsp;{this.props.name}
            </div>
        )
    }
}

export default withCopyRight(Anther) */


//装饰器写法
@withCopyRight
class Anther extends Component {
    render() {
        return (
            <div>
                anther &nbsp;{this.props.name}
            </div>
        )
    }
}

export default Anther