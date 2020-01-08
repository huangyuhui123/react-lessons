import React, { Component } from 'react'

const withCopyRight = (YourComponent)=>{
    return class WithCopyRight extends Component {
        render() {
             console.log(this.props)
            return (
                <div>
                    <YourComponent {...this.props}/>
                    这是高阶组件
                </div>
            )
        }
   }   
}

export default withCopyRight
